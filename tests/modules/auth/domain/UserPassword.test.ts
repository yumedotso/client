import { UserPassword, validateUserPassword } from '../../../../src/modules/auth/domain/UserPassword'

describe('validateUserPassword', () => {
	it('should not throw an error for a valid user password', () => {
		const validPassword = 'Password1!' as UserPassword
		expect(() => validateUserPassword(validPassword)).not.toThrowError()
	})

	it('should throw an error for an invalid user password', () => {
		const invalidPassword = 'weakpassword'
		expect(() => validateUserPassword(invalidPassword)).toThrowError('Invalid user password')
	})
})
