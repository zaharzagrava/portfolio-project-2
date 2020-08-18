// This example uses React Router v4, although it should work
// equally well with other routers that support SSR

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

import express from 'express';
import next from 'next';

import { StaticRouter } from 'react-router';

import Layout from './routes/Layout';

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use((req, res) => {

    const client = new ApolloClient({
      ssrMode: true,
      // Remember that this is the interface the SSR server will use to connect to the
      // API server, so we need to ensure it isn't firewalled, etc
      link: createHttpLink({
        uri: 'https://api-eu-central-1.graphcms.com/v2/ckdv7pdrwbwru01xr2g5r9tel/maste',
        credentials: 'same-origin',
        headers: {
          cookie: req.header('Cookie'),
        },
      }),
      cache: new InMemoryCache(),
    });
  
    const context = {};
  
    // The client-side App will instead use <BrowserRouter>
    const App = (
      <ApolloProvider client={client}>
        <StaticRouter location={req.url} context={context}>
          <Layout />
        </StaticRouter>
      </ApolloProvider>
    );
  
    // during request (see above)
    getDataFromTree(App).then(() => {
      // We are ready to render for real
      const content = ReactDOM.renderToString(App);
      const initialState = client.extract();
  
      const html = <Html content={content} state={initialState} />;
  
      res.status(200);
      res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
      res.end();
    });
  });

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

});