// @flow

import { combineReducers } from 'redux';
import authReducer from './auth';
import recordsReducer from './records';

const rootReducer = combineReducers({
  authReducer,
  recordsReducer,
});

export default rootReducer;
