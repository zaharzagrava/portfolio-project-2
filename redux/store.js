import { createStore, combineReducers } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import CilentReducer from "./client.js";

const combinedReducer = combineReducers({
  client: CilentReducer
});

const WithSSRReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {...state, ...action.payload};
  } else {
    return combinedReducer(state, action)
  }
}

const makeStore = context => createStore(WithSSRReducer);

export const wrapper = createWrapper(makeStore, {debug: false});