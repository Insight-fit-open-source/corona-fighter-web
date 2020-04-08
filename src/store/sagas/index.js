import { all, fork } from 'redux-saga/effects';

import auth from './auth';
import survey from './survey';
import profile from './profile';
import statsData from './statsData';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(auth), fork(survey), fork(profile), fork(statsData)]);
  }
}
