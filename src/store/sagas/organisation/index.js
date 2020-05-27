import { all, fork } from 'redux-saga/effects';
import detailsSync from './details-sync';
import detailsUpdate from './details-update';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([fork(detailsSync), fork(detailsUpdate)]);
  }
}
