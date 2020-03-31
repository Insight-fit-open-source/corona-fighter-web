import { call, fork, takeEvery } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { actions } from 'src/store/definitions/profile';
import { constants } from 'src/store/definitions/auth';

export function* subscribe({ payload }) {
  const { rsf } = yield call([FirebaseFactory, 'get']);
  const { user, authInProcess } = payload;
  if (authInProcess || !user) {
    return;
  }

  try {
    const userId = user.uid;

    yield fork(rsf.firestore.syncDocument, `profiles/${userId}`, {
      successActionCreator: actions.profileSynced,
      transform: doc => {
        const data = doc.data();
        if (!data) {
          return {};
        }

        return data;
      },
    });
  } catch (error) {
    console.log('Profile Sync Error:', error);
  }
}

export default function* root() {
  yield takeEvery(constants.AUTH_STATE_CHANGED, subscribe);
}
