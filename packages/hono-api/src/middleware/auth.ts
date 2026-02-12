import {createMiddleware} from "hono/factory";
import {HTTPException} from "hono/http-exception";

const authMiddleware = createMiddleware(async (c) => {
	const authHeader = (c.req.header('Authorization') || '').split(' ')[0];
	if (!authHeader){
		throw new HTTPException(
			//todo
		)
	}

})

export default authMiddleware;
