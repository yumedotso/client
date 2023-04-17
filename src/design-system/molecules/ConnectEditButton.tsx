import { Button } from '../atoms/Button'

export interface ConnectEditButtonProps {
	isLoggedIn: boolean
	connect: () => void
}

export const ConnectEditButton = (props: ConnectEditButtonProps) => {
	const { isLoggedIn, connect } = props

	if (isLoggedIn) {
		return (
			<Button href="/profile/edit" mode="tertiary" size="small">
				Edit profile
			</Button>
		)
	}

	return (
		<Button onClick={connect} mode="tertiary" size="small">
			Connect
		</Button>
	)
}
