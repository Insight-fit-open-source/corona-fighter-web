import { all, fork } from 'redux-saga/effects';

import update from './update';
import sync from './sync';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(update), fork(sync)]);
  }
}
