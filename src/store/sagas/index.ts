import { all, fork } from 'redux-saga/effects';

import auth from './auth/auth';
import signOut from './auth/signOut';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(auth), fork(signOut)]);
  }
}
