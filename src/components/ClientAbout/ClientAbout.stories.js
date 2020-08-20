import React from 'react';
import ClientAbout, { GET_CLIENT_INFO } from './ClientAbout';

import { Card } from '@material-ui/core';

// --- Stories
export default {
  title: 'Components/ClientAbout',
  component: ClientAbout,
  excludeStories: /.*Data$/,
  decorators: [Story => <Card>{(Story())}</Card>]
};

const Template = (args) => <ClientAbout {...args} />;

export const Simple = Template.bind({});
export const SimpleMockData = {
  data: {
    client: {
      residence: "San Francisco, SA",
      company: "ThatCoolCompany",
      id: "ckdygzpe81ot50105am107zfx"
    }
  }
};

Simple.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: GET_CLIENT_INFO
        },
        result: SimpleMockData
      }
    ]
  }
}