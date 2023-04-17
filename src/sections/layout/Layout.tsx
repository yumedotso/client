import { ErrorBoundary } from './ErrorBoundary'
import { Footer } from './Footer'

export const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<main>
			<ErrorBoundary>{children}</ErrorBoundary>
			<Footer />
		</main>
	)
}
