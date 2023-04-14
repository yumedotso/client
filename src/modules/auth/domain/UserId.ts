export type UserId = string & { __userIdBrand: never }

export const validateUuid = (uuid: string): boolean => {
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
	return uuidRegex.test(uuid)
}

export const validateUserId = (userId: string) => {
	if (!validateUuid(userId)) {
		throw new Error('Invalid user id')
	}
}
