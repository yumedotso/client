import { Box } from '../../design-system/atoms/Box'
import { Button } from '../../design-system/atoms/Button'
import { Lead } from '../../design-system/atoms/Lead'
import { colors } from '../../design-system/shared'

export const LoginPage = () => {
	return (
		<>
			<Box mode={colors.pink}>
				<Lead bold>Nice to see you again 😎</Lead>
				<p> Useful & meaninfull gifts without sweat</p>

				<form>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<Button size="small" type="submit">
						Login
					</Button>
				</form>
				<section className="auth__links">
					Not a user? <a href="/register">Sign up here</a>
				</section>
				<section className="auth__links">
					Forgot password? <a href="/reset-password">Reset password</a>
				</section>
			</Box>
		</>
	)
}
