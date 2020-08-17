import '../containers/reset/reset.css'
import '../containers/global/global.css'

import React from 'react'
import { wrapper } from '../redux/store'
import withApollo from '../apollo/withApollo';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withApollo(wrapper.withRedux(MyApp));

