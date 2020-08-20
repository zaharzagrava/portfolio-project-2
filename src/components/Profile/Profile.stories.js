import React from 'react';
import Profile from './Profile';

import { GET_CLIENT_INFO as ClientAbout_GET_CLIENT_INFO} from '../ClientAbout/ClientAbout'
import { GET_CLIENT_INFO as ClientContacts_GET_CLIENT_INFO} from '../ClientContacts/ClientContacts'
import { GET_CLIENT_INFO as ClientMain_GET_CLIENT_INFO} from '../ClientMain/ClientMain'
import { GET_CLIENT_INFO as ClientSkills_GET_CLIENT_INFO_SKILLS} from '../ClientSkills/ClientSkills'

import { SimpleMockData as ClientAbout_SimpleMockData } from '../ClientAbout/ClientAbout.stories'
import { SimpleMockData as ClientContacts_SimpleMockData } from '../ClientContacts/ClientContacts.stories'
import { SimpleMockData as ClientMain_SimpleMockData  } from '../ClientMain/ClientMain.stories'
import { SimpleMockData as ClientSkills_SimpleMockData  } from '../ClientSkills/ClientSkills.stories'

// --- Stories
export default {
  title: 'Components/Profile',
  component: Profile
};

const Template = (args) => <Profile {...args} />;

export const Simple = Template.bind({});
Simple.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: ClientAbout_GET_CLIENT_INFO
        },
        result: ClientAbout_SimpleMockData
      },
      {
        request: {
          query: ClientContacts_GET_CLIENT_INFO
        },
        result: ClientContacts_SimpleMockData
      },
      {
        request: {
          query: ClientMain_GET_CLIENT_INFO
        },
        result: ClientMain_SimpleMockData
      },
      {
        request: {
          query: ClientSkills_GET_CLIENT_INFO_SKILLS
        },
        result: ClientSkills_SimpleMockData
      }
    ]
  }
}

export const Loading = Template.bind({});
Loading.parameters = {
  apolloClient: {
    mocks: []
  }
}