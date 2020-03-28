import { combineReducers } from 'redux';

import auth, { state as authState } from './auth';

export default combineReducers({
  auth,
});

export const initialState = {
  auth: { ...authState },
};
