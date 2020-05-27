import { all, fork } from 'redux-saga/effects';
import sync from './sync';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(sync)]);
  }
}
