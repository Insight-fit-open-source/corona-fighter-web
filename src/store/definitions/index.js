import { combineReducers } from 'redux';

import auth, { state as authState } from './auth';
import survey, { state as surveyState } from './survey';
import profile, { state as profileState } from './profile';
import session, { state as sessionState } from './session';
import statsData, { state as statsDataState } from './statsData';

export default combineReducers({
  auth,
  survey,
  profile,
  session,
  statsData,
});

export const initialState = {
  auth: { ...authState },
  survey: { ...surveyState },
  profile: { ...profileState },
  session: { ...sessionState },
  statsData: { ...statsDataState },
};
