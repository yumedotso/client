import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

import styles from './Layout.module.scss'

export const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<main>
			<NavBar />
			<ErrorBoundary>
				<div className={styles.layout}>{children}</div>
			</ErrorBoundary>
			<Footer />
		</main>
	)
}
