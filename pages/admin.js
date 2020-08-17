import Head from 'next/head'
import Link from 'next/link'

export default function Admin() {
  
  return (
    <div>
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Link href="/" shallow={true}>
        <a>Root</a>
      </Link>

    </div>
  )
}