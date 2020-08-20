import React from 'react';
import ClientSkills, { GET_CLIENT_INFO } from './ClientSkills';

import { Card } from '@material-ui/core';

// --- Stories
export default {
  title: 'Components/ClientSkills',
  component: ClientSkills,
  excludeStories: /.*Data$/
};

const Template = (args) => <Card>  <ClientSkills {...args} /> </Card>;

export const Simple = Template.bind({});
export const SimpleMockData = {
  data: {
    client: {
      skills: [
        "Database Management",
        "Product Management",
        "Product Design",
        "Financial Analysis",
        "Financial Planning",
        "Investment Management",
        "Some Other Cool Skill"
      ],
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