import { all, fork } from 'redux-saga/effects';

import auth from './auth/auth';
import signOut from './auth/signOut';
import survey from './survey';
import profile from './profile';
import statsData from './statsData';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([
      fork(auth),
      fork(survey),
      fork(signOut),
      fork(profile),
      fork(statsData),
    ]);
  }
}
