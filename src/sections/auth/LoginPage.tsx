import { Box } from '../../design-system/atoms/Box'
import { Button } from '../../design-system/atoms/Button'
import { Input } from '../../design-system/atoms/Input'
import { Lead } from '../../design-system/atoms/Lead'
import { Link } from '../../design-system/atoms/Link'
import { Typography } from '../../design-system/atoms/Typography'
import { colors } from '../../design-system/shared'
import { EmptyLayout } from '../layout/EmptyLayout'

export const LoginPage = () => {
	return (
		<EmptyLayout>
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
				<section className="auth-links" style={{ marginTop: '0.5rem', display: 'inline-flex' }}>
					<Typography> Not a user?</Typography>{' '}
					<Link href="/register" mode="secondary">
						Sign up here
					</Link>
				</section>
				<section className="auth-links" style={{ marginTop: '0.5rem', display: 'inline-flex' }}>
					<Typography> Forgot password?</Typography>{' '}
					<Link href="/reset-password" mode="secondary">
						Reset password
					</Link>
				</section>
			</Box>
		</EmptyLayout>
	)
}
