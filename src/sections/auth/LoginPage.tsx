import { Box } from '../../design-system/atoms/Box'
import { Button } from '../../design-system/atoms/Button'
import { Input } from '../../design-system/atoms/Input'
import { Lead } from '../../design-system/atoms/Lead'
import { Link } from '../../design-system/atoms/Link'
import { Typography } from '../../design-system/atoms/Typography'
import { colors } from '../../design-system/shared'

export const LoginPage = () => {
	return (
		<div>
			<Box mode={colors.pink}>
				<Lead bold>Nice to see you again 😎</Lead>
				<Typography type="p">Login to your account</Typography>

				<form style={{ width: '100%' }}>
					<Input
						label="Name"
						size="small"
						type="email"
						placeholder="Nombre y apellidos"
						id="login-email"
						hideLabel
						required
					/>
					<Input
						label="Password"
						size="small"
						type="password"
						placeholder="Contraseña"
						id="input"
						onChange={() => {}}
						hideLabel
						required
					/>
					<Button size="small" type="submit">
						Login
					</Button>
				</form>
				<section className="auth__links" style={{ marginTop: '1rem', display: 'inline-flex' }}>
					<Typography> Not a user?</Typography>{' '}
					<Link href="/register" mode="secondary">
						Sign up here
					</Link>
				</section>
				<section className="auth__links">
					Forgot password? <a href="/reset-password">Reset password</a>
				</section>
			</Box>
		</div>
	)
}
