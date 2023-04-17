import type { AppProps } from 'next/app'
import '../design-system/index.scss'
import { Layout } from '../sections/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
