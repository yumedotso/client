import React from 'react'

import { Button } from '../../design-system/atoms/Button'
import { ConnectEditButton } from '../../design-system/molecules/ConnectEditButton'
import { ShareButton } from '../../design-system/molecules/ShareButton'

import styles from './NavBar.module.scss'

export const NavBar = () => {
	const isEdit = true

	if (isEdit) return <SettingsNav />

	return <PublicNav />
}

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
	const url = 'https://www.google.com'

	const connect = () => alert("You're not logged in")

	return (
		<NavbarContainer>
			<ConnectEditButton isLoggedIn={false} connect={connect} />
			<ShareButton url={url} />
		</NavbarContainer>
	)
}
