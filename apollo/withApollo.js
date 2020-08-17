import withApollo from 'next-with-apollo';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: 'https://api-eu-central-1.graphcms.com/v2/ckdv7pdrwbwru01xr2g5r9tel/master',
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);