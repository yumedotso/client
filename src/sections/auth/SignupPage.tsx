import { Box } from '../../design-system/atoms/Box'
import { Button } from '../../design-system/atoms/Button'
import { Input } from '../../design-system/atoms/Input'
import { Lead } from '../../design-system/atoms/Lead'
import { Link } from '../../design-system/atoms/Link'
import { Typography } from '../../design-system/atoms/Typography'
import { colors } from '../../design-system/shared'
import { EmptyLayout } from '../layout/EmptyLayout'

import styles from './SignupPage.module.scss'

export const SignupPage = () => {
	return (
		<EmptyLayout>
			<Box mode={colors.orange}>
				<Lead bold>Welcome to yume 🥳</Lead>
				<Typography type="p">Useful & meaninfull gifts without sweat</Typography>
				<form className={styles['login-form']}>
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
					<Typography> Already a user?</Typography>{' '}
					<Link href="/login" mode="secondary">
						Sign in here
					</Link>
				</section>
			</Box>
		</EmptyLayout>
	)
}
