export interface MiddlewareVariables {
	user: {
		id: string,
		email: string,
		role: 'USER' | 'ORGANIZER'
	}
}

export interface JWTPayload {
	userId: string,
	email: string,
	role: 'USER' | 'ORGANIZER'
}
