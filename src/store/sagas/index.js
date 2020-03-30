import { all, fork } from 'redux-saga/effects';

import auth from './auth/auth';
import survey from './survey';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(auth), fork(survey)]);
  }
}
