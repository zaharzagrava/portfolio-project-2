// import React from 'react';

// import { Provider } from 'react-redux';
// import RootReducer from '../src/redux/'

// import {BrowserRouter} from 'react-router-dom';

// // --- Setting up Redux & Redux Dev Tools
// const store = createStore(
//   RootReducer
// );

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

// export const decorators = [
//   (Story) => (
//     <Provider store={store}>
//             <Story />
//     </Provider>
//   )
// ]