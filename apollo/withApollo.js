import withApollo from 'next-with-apollo';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = 'https://api-eu-central-1.graphcms.com/v2/ckdv7pdrwbwru01xr2g5r9tel/master';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
});

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {})
    });
  }
);