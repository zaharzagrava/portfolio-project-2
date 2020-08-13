import Head from 'next/head'
import { Button } from '@material-ui/core'
import { spacing } from '@material-ui/system';
import { StylesProvider } from '@material-ui/core/styles';

import Register from '../components/Register/Register.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Project 2</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>

      <StylesProvider injectFirst >
        <Register />
      </StylesProvider>

    </div>
  )
}
