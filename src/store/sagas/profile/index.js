import { all, fork } from 'redux-saga/effects';

import checkin from './checkin';
import profileSync from './profileSync';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(checkin), fork(profileSync)]);
  }
}
