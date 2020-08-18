import '../containers/reset/reset.css'
import '../containers/global/global.css'

import React from 'react'
import { wrapper } from '../redux/store'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { getDataFromTree } from '@apollo/react-ssr';

import withApollo from '../apollo/withApollo';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default withApollo(wrapper.withRedux(MyApp));

// ------

// const App = ({ Component, pageProps }) => (
//     <Component {...pageProps} />
// );

// export default wrapper.withRedux(App);

// ------

// const App = ({ Component, pageProps, apollo }) => (
//   <ApolloProvider client={apollo}>
//     <Component {...pageProps} />
//   </ApolloProvider>
// );

// export default withApollo(
// ({ initialState }) => {
//   console.log("--- initialState ---")
//   console.log(initialState)
//   return new ApolloClient({
//     uri: 'https://api-eu-central-1.graphcms.com/v2/ckdv7pdrwbwru01xr2g5r9tel/master',
//     cache: new InMemoryCache().restore(initialState || {})
//   });
// },
// {
//   getDataFromTree: getDataFromTree,
//   onError: (err, ctx) => {
//     console.log("error")
//     console.log(err)
//   }
// })(wrapper.withRedux(App));

// ------

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(wrapper.withRedux(App));
