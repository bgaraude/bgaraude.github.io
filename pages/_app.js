import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Garaude&apos;s blog</title>
      </Head>
      <div className="container">
        <nav className="nav py-3 border-bottom">
          <Link href="/" passHref>
            <h2 role="button">Garaude&apos;s Blog</h2>
          </Link>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  )
}   

export default MyApp
