import React from 'react';
import ReactDOM from 'react-dom';

import './util/global/global.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from "./redux/";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import {BrowserRouter} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app';

// --- Setting up Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDrCk09x4Z560qhtHe3WB1h9mwB8Y-eo7E",
  authDomain: "portfolio-project-2-f7d94.firebaseapp.com",
  databaseURL: "https://portfolio-project-2-f7d94.firebaseio.com",
  projectId: "portfolio-project-2-f7d94",
  storageBucket: "portfolio-project-2-f7d94.appspot.com",
  messagingSenderId: "878682940980",
  appId: "1:878682940980:web:5662a3226be2b93407cc61",
  measurementId: "G-QJ2CFMQ9FK"
};

firebase.initializeApp(firebaseConfig);

// --- Setting up Redux & Redux Dev Tools
const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// --- Setting up Apollo Client
const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckdv7pdrwbwru01xr2g5r9tel/master',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={apolloClient}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
