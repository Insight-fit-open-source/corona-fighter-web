import { combineReducers } from 'redux';
import auth, { state as authState } from './auth';
import organisation, { state as organisationState } from './organisation';
import profile, { state as profileState } from './profile';
import session, { state as sessionState } from './session';
import statsData, { state as statsDataState } from './statsData';
import survey, { state as surveyState } from './survey';

export default combineReducers({
  auth,
  survey,
  profile,
  session,
  statsData,
  organisation,
});

export const initialState = {
  auth: { ...authState },
  survey: { ...surveyState },
  profile: { ...profileState },
  session: { ...sessionState },
  statsData: { ...statsDataState },
  profile: { ...profileState },
  organisation: { ...organisationState },
};
