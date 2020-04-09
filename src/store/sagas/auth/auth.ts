import { call, take, takeLatest, put, spawn, select } from 'redux-saga/effects';

import FirebaseFactory from 'src/app/lib/firebase';
import { actions, constants } from 'src/store/definitions/auth';

function getUserToken(user) {
  return user && user.getIdToken();
}

function* workerAuthState(chanEvent) {
  const { rsf } = yield call([FirebaseFactory, 'get']);
  const { user } = chanEvent;
  const { messagingToken } = yield select(state => state.profile);

  yield put(actions.authStateChanged({ user, authInProcess: true }));
  if (user) {
    const userToken = yield call(getUserToken, user);
    yield put(
      actions.authStateChanged({ user, userToken, authInProcess: false }),
    );
    yield call(
      rsf.firestore.updateDocument,
      `profiles/${user.uid}`,
      'messagingToken',
      messagingToken,
    );
  } else {
    yield put(
      actions.authStateChanged({
        user: null,
        userToken: null,
        authInProcess: false,
      }),
    );
  }
}

function* watcherAuthState() {
  const { rsf } = yield call(FirebaseFactory.get);

  if (!rsf || !rsf.auth) {
    yield call(rsf.retry);
    return actions.authStateChanged({
      user: null,
      userToken: null,
      authInProcess: false,
    });
  }

  try {
    const channel = yield call(rsf.auth.channel);
    yield takeLatest(channel, workerAuthState);
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
}

export default function* authState() {
  yield take(constants.CLIENT_SESSION_STARTED);
  yield spawn(watcherAuthState);
}
