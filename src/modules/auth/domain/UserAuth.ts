import { UserEmail, validateUserEmail } from './UserEmail'
import { UserId, validateUserId } from './UserId'
import { UserPassword, validateUserPassword } from './UserPassword'

export interface UserAuth {
	id: UserId
	email: UserEmail
	password: UserPassword
}

export const validateUserAuth = (userAuth: UserAuth): void => {
	validateUserId(userAuth.id)
	validateUserEmail(userAuth.email)
	validateUserPassword(userAuth.password)
}
