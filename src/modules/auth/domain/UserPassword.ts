export type UserPassword = string & { __userPasswordBrand: never }

/**
 * @param password
 * @returns {UserPassword}
 * @throws {Error} if password is invalid
 */
const isValidPassword = (password: string): boolean => {
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/
	return passwordRegex.test(password)
}

export const validateUserPassword = (password: string): void => {
	if (!isValidPassword(password)) {
		throw new Error('Invalid user password')
	}
}
