import Head from 'next/head'
import { Button } from '@material-ui/core'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Project 2</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>

      <Button variant="contained" color="primary">
        This is my first Material-UI Button
      </Button>

    </div>
  )
}
