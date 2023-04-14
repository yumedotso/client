import type { AppProps } from 'next/app'
import '../design-system/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp
