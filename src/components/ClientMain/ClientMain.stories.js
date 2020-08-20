import React from 'react';
import ClientMain, { GET_CLIENT_INFO } from './ClientMain';

import { Card } from '@material-ui/core';

// --- Stories
export default {
  title: 'Components/ClientMain',
  component: ClientMain,
  excludeStories: /.*Data$/,
  decorators: [Story => <Card>{(Story())}</Card>]
};

const Template = (args) => <ClientMain {...args} />;

export const Simple = Template.bind({});
export const SimpleMockData = {
  data: {
    client: {
      fullName: "John Smith",
      jobTitle: "Front-end developer",
      residence: "San Francisco, SA",
      company: "ThatCoolCompany",
      avatarImage: {
        url: "https://media.graphcms.com/fSDwxKolRXOOMCICXPG7"
      },
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