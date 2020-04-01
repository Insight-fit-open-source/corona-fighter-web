import { all, fork } from 'redux-saga/effects';

import checkin from './checkin';
import sync from './sync';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(checkin), fork(sync)]);
  }
}
