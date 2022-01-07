import Link from 'next/link'

const Intro = () => {
  return (
      <nav className="nav my-3 py-3">
          <Link href="/" passHref>
            <h1 role="button">Garaude&apos;s Blog</h1>
          </Link>
        </nav>
  )
}

export default Intro
