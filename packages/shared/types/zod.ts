import * as z from 'zod'

const emailSchema = z.object({
	email:  z.email()
})

const signUpSchema = z.object({
	email: z.email(),
	password: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	avatarUrl: z.url(),
	role: z.enum([
		'USER',
		'ORGANIZER'
	]),
	organizationName: z.string().optional()
})

const signInSchema = z.object({
	email: z.email(),
	password: z.string(),
})

const otpVerifySchema = z.object({
	email: z.email(),
	otp: z.string().length(6)
})

const passwordForgotVerifyQuerySchema = z.object({
	email: z.email(),
	password: z.string(),
	slug: z.cuid2()
})

const tokenRefreshSchema = z.object({
	id: z.cuid(),
	refreshToken: z.string()
})

export {
	signUpSchema,
	signInSchema,
	emailSchema,
	otpVerifySchema,
	passwordForgotVerifyQuerySchema,
	tokenRefreshSchema
}
