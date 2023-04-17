import { Button } from '../../design-system/atoms/Button'

import styles from './NavBar.module.scss'

const NavbarContainer = ({ children }: React.PropsWithChildren) => {
	return <nav className={styles.container}>{children}</nav>
}

export const SettingsNav = () => {
	return (
		<NavbarContainer>
			<Button href="/preview" mode="secondary" size="small">
				Preview
			</Button>
			<Button href="/" mode="primary" size="small">
				Add new wish
			</Button>
		</NavbarContainer>
	)
}

export const PublicNav = () => {
	return (
		<NavbarContainer>
			<Button href="/settings" mode="tertiary" size="small">
				Connect
			</Button>
		</NavbarContainer>
	)
}
