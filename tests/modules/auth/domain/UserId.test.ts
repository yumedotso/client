import { UserId, validateUserId, validateUuid } from '../../../../src/modules/auth/domain/UserId'

const Uuid = 'f04739b4-8f8e-4c93-93f0-3a6fcaf8d36c' as UserId

describe('validateUuid', () => {
	it('returns true for a valid UUID', () => {
		expect(validateUuid(Uuid)).toBe(true)
	})

	it('returns false for an invalid UUID', () => {
		expect(validateUuid('not-a-uuid')).toBe(false)
	})
})

describe('validateUserId', () => {
	it('does not throw an error for a valid user ID', () => {
		expect(() => {
			validateUserId(Uuid)
		}).not.toThrow()
	})

	it('throws an error for an invalid user ID', () => {
		expect(() => {
			validateUserId('not-a-uuid')
		}).toThrow('Invalid user id')
	})
})
