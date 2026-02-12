import {Hono} from "hono";
import {type MiddlewareVariables} from "@repo/shared/type";
import {emailSchema, passwordForgotVerifyQuerySchema, signInSchema, signUpSchema, tokenRefreshSchema} from '@repo/shared/type/zod';
import { zValidator } from "@hono/zod-validator";
import {prisma} from "@repo/db/client";
import {HTTPException} from "hono/http-exception";
import bcrypt from 'bcrypt';
import otpRoute from "./otp.ts";
import {generateTokens} from "../../utils/jwt.ts";
import {saveAndGetForgotPasswordSlug, VerifyPasswordSlug} from "../../utils/redis.ts";

const authRoute = new Hono<{
	Variables: MiddlewareVariables
}>({
	strict: true
})
	.route('/otp', otpRoute)
	.post(
		'/signup',
		zValidator('json', signUpSchema),
		async (c) => {
			const reqData = c.req.valid('json');

			const existingUser = await prisma.account.findUnique({
				where: {
					email: reqData.email
				}
			})

			if (existingUser) {
				throw new HTTPException(409, {
					message: "Account with this email already exists",
					cause: "DuplicateEmail"
				});
			}

			await prisma.$transaction(async (tx) => {
				const wallet = await tx.wallet.create({
					data: {}
				})

				reqData.password = await bcrypt.hash(reqData.password, 12)

				const account = await tx.account.create({
					data: {
						email: reqData.email,
						firstName: reqData.firstName,
						lastName: reqData.lastName,
						password: reqData.password,
						avatarUrl: reqData.avatarUrl,
						role: reqData.role,
						wallet: {
							connect: {
								id: wallet.id
							}
						}
					}
				})

				if (reqData.role === 'USER'){
					await tx.user.create({
						data: {
							account: {
								connect: {
									id: account.id
								}
							}
						}
					})
				}else {
					const organization = await tx.organization.upsert({
						where: {
							organizationName: reqData.organizationName!
						},
						update: {

						},
						create: {
							organizationName: reqData.organizationName!
						}
					})

					await tx.organizer.create({
						data: {
							account: {
								connect: {
									id: account.id
								}
							},
							organization: {
								connect: {
									id: organization.id
								}
							}
						}
					})
				}
			})
			return c.json(
				{
					success: true,
					message: "Account created"
				},
				201
			)
		}
	)
	.post(
		'/signin',
		zValidator('json', signInSchema),
		async (c) => {
			const reqData = c.req.valid('json');

			const account = await prisma.account.findUnique({
				where: {
					email: reqData.email
				}
			})
			if (!account || !bcrypt.compareSync(reqData.password, account.password)){
				throw new HTTPException(
					401,
					{
						message: 'Invalid credentials',
						cause: 'InputError'
					}
				)
			}

			if (!account.isVerified){
				throw new HTTPException(
					401,
					{
						message: 'Invalid credentials',
						cause: 'InputError'
					}
				)
			}

			const tokens = generateTokens({
				userId: account.id,
				email: account.email,
				role: account.role
			});

			await prisma.account.update({
				where: {
					id: account.id
				},
				data:{
					refreshToken: tokens.refresh
				}
			})

			return c.json(
				{
					data: {
						tokens
					},
					message: 'Signed in successfully',
					success: true
				},
				201
			)
		}
	)
	.post(
		'/token/refresh',
		zValidator('json', tokenRefreshSchema),
		async (c) => {
			const reqData = c.req.valid('json');

			const account = await prisma.account.findUnique({
				where: {
					id: reqData.id
				}
			})

			if (!account || account.refreshToken == ''){
				throw new HTTPException(
					401,
					{
						message: 'Refresh token is not valid!',
						cause: 'InputError'
					}
				)
			}

			const tokens = generateTokens({
				userId: account.id,
				email: account.email,
				role: account.role
			});

			await prisma.account.update({
				where: {
					id: account.id
				},
				data:{
					refreshToken: tokens.refresh
				}
			})

			return c.json(
				{
					data: {
						tokens
					},
					message: 'Token refreshed successfully',
					success: true
				},
				201
			)
		}
	)
	.post(
		'/password/forgot',
		zValidator('query', emailSchema),
		async (c) => {
			const reqData = c.req.valid('query');

			const account = await prisma.account.findUnique({
				where: {
					email: reqData.email
				}
			})
			if (!account){
				throw new HTTPException(
					400,
					{
						message: "Account doesn't exists.",
						cause: 'InvalidRequest'
					}
				)
			}
			//todo add mail sender to send mail with slug
			const slug = await saveAndGetForgotPasswordSlug(reqData.email);

			return c.json(
				{
					message: 'Password forgot request sent to your email',
					success: true
				},
				200
			)
		}
	)
	.post(
		'/password/update',
		zValidator('query', passwordForgotVerifyQuerySchema),
		async (c) => {
			const reqData = c.req.valid('query');

			const isValidRequest = await VerifyPasswordSlug(reqData.email, reqData.slug);
			if (!isValidRequest){
				throw new HTTPException(
					401,
					{
						message: 'Invalid or expired password reset link.',
						cause: 'InvalidResetToken'
					}
				)
			}

			const hashedPass = await bcrypt.hash(reqData.password, 12);
			await prisma.account.update({
				where: {
					email: reqData.email
				},
				data: {
					password: hashedPass
				}
			})

			return c.json(
				{
					message: 'Password updated successfully',
					success: true
				},
				201
			)
		}
	)

export  default authRoute;
