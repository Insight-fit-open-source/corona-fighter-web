import FirebaseFactory from 'src/app/lib/firebase';
import { takeEvery, call, retry, select } from 'redux-saga/effects';
import { constants } from 'src/store/definitions/profile';

function* retryUpdate() {
  const { rsf } = yield call([FirebaseFactory, 'get']);
  const { uid } = yield select(state => state.auth.user);

  if (!uid) {
    throw new Error('nope');
  }

  try {
    yield call(
      rsf.firestore.updateDocument,
      `profiles/${uid}`,
      'lastCheckin',
      Date.now(),
    );
  } catch (error) {
    throw new Error(error);
  }
}

function* handleUpdate({ payload }) {
  try {
    yield retry(5, 5000, retryUpdate, payload);
  } catch (error) {
    console.log('Update Error:', error);
  }
}

export default function* root() {
  yield takeEvery(constants.CHECKIN, handleUpdate);
}
