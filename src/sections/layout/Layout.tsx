import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

import styles from './Layout.module.scss'

export const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<main className={styles.layout}>
			<NavBar />
			<ErrorBoundary>
				<div>{children}</div>
			</ErrorBoundary>
			<Footer />
		</main>
	)
}
