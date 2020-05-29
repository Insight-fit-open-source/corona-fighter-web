import { call, put, retry, select, takeEvery } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { constants } from 'src/store/definitions/organisation';

function* retryUpdate(payload) {
  const { rsf, firestore } = yield call([FirebaseFactory, 'get']);
  const { uid } = yield select(state => state.auth.user);

  if (!uid) {
    throw new Error('nope');
  }

  try {
    const invitations = yield call(
      rsf.firestore.getCollection,
      firestore
        .collection('invitations')
        .where('organisationId', '==', userId)
        .where('invitationCode', '==', payload),
    );

    console.log(invitations);
  } catch (error) {
    yield put(actions.organisationDetailsSyncFailed());
    throw new Error(error);
  }
}

/**
 * Call the update generator
 * @param payload
 * @returns {IterableIterator<CallEffect|PutEffect<*>>}
 */
function* handleUpdate({ payload }) {
  try {
    yield retry(5, 5000, retryUpdate, payload);
  } catch (error) {
    console.log('Update Error:', error);
  }
}

/**
 * Listen for the update action
 */
export default function* root() {
  yield takeEvery(constants.ORGANISATION_INVITATION_ADDED, handleUpdate);
}
