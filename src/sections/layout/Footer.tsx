import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<span className={styles.container}>
			<p>
				Made with 😻 by{' '}
				<a href="https://github.com/gagocarrilloedgar">
					<strong>@gagocarrilloedgar</strong>
				</a>
			</p>
		</span>
	)
}
