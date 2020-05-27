import { call, put, retry, select, takeEvery } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { actions, constants } from 'src/store/definitions/organisation';

function* retryUpdate(payload) {
  const { rsf, analytics } = yield call([FirebaseFactory, 'get']);
  const { uid } = yield select(state => state.auth.user);
  const { name, email } = yield select(state => state.organisation);

  console.log('UID: ', uid);

  if (!uid) {
    throw new Error('nope');
  }

  const data = {};
  data.organisation = { name, email };
  console.log('DATA: ', data);
  try {
    yield call(rsf.firestore.setDocument, `profiles/${uid}/`, data, {
      merge: true,
    });

    // yield put(actions.organisationDetailsSyncSucceeded());
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
  yield takeEvery(constants.ORGANISATION_DETAILS_UPDATED, handleUpdate);
}
