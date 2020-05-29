import * as randomatic from 'randomatic';
import { call, put, retry, select, takeEvery } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { constants } from 'src/store/definitions/organisation';

function* retryUpdate(payload) {
  const { rsf } = yield call([FirebaseFactory, 'get']);
  const { uid } = yield select(state => state.auth.user);

  if (!uid) {
    throw new Error('nope');
  }

  try {
    const code = randomatic('A0', 8);

    const doc = yield call(rsf.firestore.addDocument, 'invitations', {
      dateSent: Date.now(),
      invitationAccepted: false,
      invitationCode: code,
      organisationId: uid,
      userEmailAddress: payload.email,
      userId: '',
    });
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
