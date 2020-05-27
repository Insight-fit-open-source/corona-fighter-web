import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import organisation from './organisation';
import profile from './profile';
import statsData from './statsData';
import survey from './survey';

export default function* rootSaga() {
  if (typeof window !== 'undefined') {
    yield all([
      fork(auth),
      fork(survey),
      fork(profile),
      fork(statsData),
      fork(organisation),
    ]);
  }
}
