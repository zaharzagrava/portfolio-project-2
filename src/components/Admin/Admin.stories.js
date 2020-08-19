import React from 'react';
import Admin, { GET_CLIENTS } from './Admin';

// --- Loading Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from '../../redux/'

import addons from '@storybook/addons'

import withRedux from 'addon-redux/withRedux'
import withReduxEnhancer from 'addon-redux/enhancer'

// --- Loading Apollo
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

// --- Stories
export default {
  title: 'Pages/Admin',
  component: Admin,
  decorators: [
    withReduxDecorator,
    withApolloClient
  ]
};

const Template = (args) => <Admin {...args} />;

export const Simple = Template.bind({});
Simple.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_CLIENTS
        },
        result: {
          data:
          {
            clients: [
              {
                fullName: "John Smith",
                jobTitle: "Front-end developer",
                residence: "San Francisco, SA",
                company: "ThatCoolCompany",
                avatarImage: {
                  url: "https://media.graphcms.com/fSDwxKolRXOOMCICXPG7"
                },
                id: "ckdygzpe81ot50105am107zfx"
              }
            ]
          }
        }
      }
    ]
  }
}