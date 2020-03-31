import { combineReducers } from 'redux';

import auth, { state as authState } from './auth';
import survey, { state as surveyState } from './survey';
import profile, { state as profileState } from './profile';

export default combineReducers({
  auth,
  survey,
  profile,
});

export const initialState = {
  auth: { ...authState },
  survey: { ...surveyState },
  profile: { ...profileState },
};
