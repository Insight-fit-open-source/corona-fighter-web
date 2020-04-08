import { all, fork } from 'redux-saga/effects';

import auth from './auth';
import messagingTokenRefresh from './messagingTokenRefresh';
import signOut from './signOut';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(auth), fork(signOut), fork(messagingTokenRefresh)]);
  }
}
