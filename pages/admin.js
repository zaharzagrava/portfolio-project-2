import Head from 'next/head'
import Link from 'next/link'

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { getDataFromTree } from "@apollo/react-ssr";

import {Typography} from '@material-ui/core'

import Admin from "../components/Admin/Admin";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const AdminPage = () => {
  
  return (
    <div>
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Admin />

    </div>
  )
}

export default AdminPage

// export async function getServerSideProps(context, req, res, query, params) {

//   const client = new ApolloClient({
//     ssrMode: true,
//     // Remember that this is the interface the SSR server will use to connect to the
//     // API server, so we need to ensure it isn't firewalled, etc
//     link: createHttpLink({
//       uri: 'https://api-eu-central-1.graphcms.com/v2/ckdv7pdrwbwru01xr2g5r9tel/maste'
//     }),
//     cache: new InMemoryCache(),
//   });

//   // The client-side App will instead use <BrowserRouter>
//   const App = (
//     <ApolloProvider client={client}>
//         <AdminPage />
//     </ApolloProvider>
//   );

//   // during request (see above)
//   getDataFromTree(App).then(() => {

//     const initialState = client.extract();
//     console.log(initialState)
//     // We are ready to render for real
//     console.log("any result?")
//   });


//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }