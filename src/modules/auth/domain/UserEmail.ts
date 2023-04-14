export type UserEmail = string & { __userEmailBrand: never }

/**
 * @param email
 * @returns {UserEmail}
 * @throws {Error} if email is invalid
 * @description: Can't contain . at the end, can't contain spaces, can't contain @ at the beginning or end
 * */
export const isValidEmail = (email: string): boolean => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\.?[^.\s]+$/
	return emailRegex.test(email)
}

export const validateUserEmail = (email: string): void => {
	if (!isValidEmail(email)) {
		throw new Error('Invalid user email')
	}
}
