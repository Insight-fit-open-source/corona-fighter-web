import { combineReducers } from 'redux';

import auth, { state as authState } from './auth';
import survey, { state as surveyState } from './survey';

export default combineReducers({
  auth,
  survey,
});

export const initialState = {
  auth: { ...authState },
  survey: { ...surveyState },
};
