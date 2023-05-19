import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'

import styles from './EmptyLayout.module.scss'

export const EmptyLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<main className={styles.layout}>
			<ErrorBoundary>
				<div className={styles.body}>{children}</div>
			</ErrorBoundary>
			<Footer />
		</main>
	)
}
