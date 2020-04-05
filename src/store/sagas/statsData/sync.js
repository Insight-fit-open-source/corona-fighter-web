import { call, fork, takeEvery } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { actions } from 'src/store/definitions/statsData';
import { constants } from 'src/store/definitions/auth';

export function* subscribe({ payload }) {
  const { rsf } = yield call([FirebaseFactory, 'get']);
  const { authInProcess } = payload;
  if (authInProcess) {
    return;
  }

  try {
    yield fork(rsf.firestore.syncDocument, `cumulative/za`, {
      successActionCreator: actions.cumulativeSynced,
      transform: doc => {
        const data = doc.data();
        if (!data) {
          return {};
        }

        return data;
      },
    });
    yield fork(rsf.firestore.syncDocument, `daily/za`, {
      successActionCreator: actions.dailySynced,
      transform: doc => {
        const data = doc.data();
        if (!data) {
          return {};
        }

        return data;
      },
    });
  } catch (error) {
    console.log('Data Sync Error:', error);
  }
}

export default function* root() {
  yield takeEvery(constants.AUTH_STATE_CHANGED, subscribe);
}
