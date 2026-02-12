import {Hono} from "hono";
import type {MiddlewareVariables} from "@repo/shared/type";
import {zValidator} from "@hono/zod-validator";
import {emailSchema, otpVerifySchema} from "@repo/shared/type/zod";
import {prisma} from "@repo/db/client";
import {HTTPException} from "hono/http-exception";
import {getOtp, saveOtp} from "../../utils/redis.ts";

const otpRoute = new Hono<{
	Variables: MiddlewareVariables
}>({
	strict: true
})
	.post(
		'/get',
		zValidator('query', emailSchema),
		async (c) => {
			const reqData = c.req.valid('query');

			const account = await prisma.account.findUnique({
				where: {
					email: reqData.email,
					isVerified: false
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

			const otp = await getOtp(account.id) || await saveOtp(account.id);
			//todo send mail

			return c.json(
				{
					message: 'Successfully sent otp',
					success: true
				},
				200
			)
		}
	)
	.post(
		'/verify',
		zValidator('json', otpVerifySchema),
		async (c) => {
			const reqData = c.req.valid('json');

			const account = await prisma.account.findUnique({
				where: {
					email: reqData.email,
					isVerified: false
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

			const otp = await getOtp(account.id);
			if(!otp || otp != reqData.otp){
				throw new HTTPException(
					401,
					{
						message: 'Otp is invalid',
						cause: 'InputError'
					}
				)
			}
			await prisma.account.update({
				where: {
					email: reqData.email
				},
				data: {
					isVerified: true
				}
			})

			return c.json(
				{
					success: true,
					message: 'Otp verified successfully'
				},
				201
			)
		}
	)

export default otpRoute;

