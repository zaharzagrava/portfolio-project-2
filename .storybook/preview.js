// import React from 'react';

// import { Provider } from 'react-redux';
// import RootReducer from '../src/redux/'

// import {BrowserRouter} from 'react-router-dom';

// --- Loading Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from '../src/redux'

import addons from '@storybook/addons'

import withRedux from 'addon-redux/withRedux'
import withReduxEnhancer from 'addon-redux/enhancer'

// --- Loading (& Setting up) Apollo
import { withApolloClient } from 'storybook-addon-apollo-client';

// --- Setting up Redux
const store = createStore(RootReducer, withReduxEnhancer)

const withReduxSettings = {
  Provider,
  store,
  state: {},
  actions: []
}

const withReduxDecorator = withRedux(addons)(withReduxSettings)

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS
    }
  }
  // defaultViewport
}

export const decorators = [
  withReduxDecorator,
  withApolloClient
]