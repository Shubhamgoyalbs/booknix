import jwt from "jsonwebtoken"
import type { JWTPayload } from "@repo/shared/type"

const {
	JWT_SECRET
} = process.env

if (!JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined in environment variables")
}

export const generateTokens = (payload: JWTPayload) => {
	const access = jwt.sign(payload, JWT_SECRET, {
		expiresIn: '7h'
	})

	const refresh = jwt.sign(payload, JWT_SECRET, {
		expiresIn: '3d'
	})

	return {
		access,
		refresh
	}
}

const verifyAccessToken = (token: string) => {
	const payload = jwt.verify(token, JWT_SECRET);

}

