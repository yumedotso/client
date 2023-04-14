import { isValidEmail, validateUserEmail } from '../../../../src/modules/auth/domain/UserEmail'

describe('isValidEmail', () => {
	it('returns true for a valid email', () => {
		expect(isValidEmail('john.doe@example.com')).toBe(true)
	})

	it('returns false for an invalid email', () => {
		expect(isValidEmail('john.doe')).toBe(false)
		expect(isValidEmail('john.doe@example')).toBe(false)
		expect(isValidEmail('john.doe@.com')).toBe(false)
		expect(isValidEmail('john.doe@example.com.')).toBe(false)
		expect(isValidEmail('john.doe@exa mple.com')).toBe(false)
	})
})

describe('validateUserEmail', () => {
	it('does not throw an error for a valid email', () => {
		expect(() => validateUserEmail('john.doe@example.com')).not.toThrow()
	})

	it('throws an error for an invalid email', () => {
		expect(() => validateUserEmail('john.doe')).toThrow('Invalid user email')
		expect(() => validateUserEmail('john.doe@example')).toThrow('Invalid user email')
		expect(() => validateUserEmail('john.doe@.com')).toThrow('Invalid user email')
		expect(() => validateUserEmail('john.doe@example.com.')).toThrow('Invalid user email')
		expect(() => validateUserEmail('john.doe@exa mple.com')).toThrow('Invalid user email')
	})
})
