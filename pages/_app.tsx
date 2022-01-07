import { AppProps } from 'next/app'
import '../styles/index.scss'
import '../styles/markdown.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
