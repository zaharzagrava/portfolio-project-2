import React from 'react';
import ClientContacts, { GET_CLIENT_INFO } from './ClientContacts';

import { Card } from '@material-ui/core';

// --- Stories
export default {
  title: 'Components/ClientContacts',
  component: ClientContacts,
  excludeStories: /.*Data$/,
  decorators: [Story => <Card>{(Story())}</Card>],
  argTypes: {
    Label: {
      control: 'text',
      description: 'Some Description'
    },
    onLogin: {
      description: 'Some Description'
    } 
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*'
    }
  }
};

const Template = (args) =>  <ClientContacts {...args} />;

export const Simple = Template.bind({});
export const SimpleMockData = {
  data: {
    client: {
      twitter: "https://portfolio-project-2-f7d94.web.app/",
      personalWebsite: "https://portfolio-project-2-f7d94.web.app/",
      linkedIn: "https://portfolio-project-2-f7d94.web.app/",
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
Simple.args = {
  Label: "Test"
}