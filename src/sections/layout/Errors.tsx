import { Button } from '../../design-system/atoms/Button'

import styles from './Errors.module.scss'

export const NotFound = () => {
	return (
		<ErrorContainer>
			<h1>🥲 404</h1>
			<p>Ups this page doesn not exist</p>
			<Button size="small" href="/">
				Go back
			</Button>
		</ErrorContainer>
	)
}

export const ServerError = () => {
	return (
		<ErrorContainer>
			<h1>🥲 500</h1>
			<p>Ups something went wrong</p>
			<Button size="small" href="/">
				Go back
			</Button>
		</ErrorContainer>
	)
}

const ErrorContainer = ({ children }: React.PropsWithChildren) => {
	return <div className={styles['error-container']}>{children}</div>
}
