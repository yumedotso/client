import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'
import { NavBar } from './NavBar'

import styles from './Layout.module.scss'

export const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className={styles.layout}>
			<NavBar />
			<ErrorBoundary>
				<div className={styles.content}>{children}</div>
			</ErrorBoundary>
			<Footer />
		</div>
	)
}
