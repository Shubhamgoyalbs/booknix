import {Hono} from "hono";
import authRoute from "./routes/auth.ts";
import {logger} from "hono/logger";
import {prettyJSON} from "hono/pretty-json";
import {cors} from "hono/cors";
import {HTTPException} from "hono/http-exception";
import type {MiddlewareVariables} from "@repo/shared/type";
import authMiddleware from "./middleware/auth.ts";

const api = new Hono
	<{
		Variables: MiddlewareVariables
	}>({
		strict: true
	})
	.use(logger())
	.use(prettyJSON())
	.use(cors())
	.notFound(async (c) => {
		throw new HTTPException(
			404,
			{
				message: "Requested route doesn't exists!",
				cause: 'RequestError'
			}
		)
	})
	.get('/health', (c) => {
		return c.json(
			{
				status: 'ok',
				uptime: process.uptime(),
				timestamp: new Date().toISOString(),
			},
			200
		)
	})
	.onError(async (err, c) => {
		if (err instanceof HTTPException){
			return c.json(
				{
					message: err.message,
					cause: err.cause,
					success: true
				},
				err.status
			)
		}
		return c.json(
			{
				message: 'Internal server error',
				name: 'ServerError'
			},
			500
		)
	})
	.route('/auth', authRoute)
	.use(authMiddleware)

export type ApiType = typeof api;
export default api;
