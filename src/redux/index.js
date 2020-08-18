import { combineReducers } from 'redux';

import CilentReducer from "./client.js";

export default combineReducers({
  client: CilentReducer
});