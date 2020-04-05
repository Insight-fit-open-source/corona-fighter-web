import FirebaseFactory from 'src/app/lib/firebase';
import { takeEvery, call, put, retry, select } from 'redux-saga/effects';
import { actions, constants } from 'src/store/definitions/survey';

function* retryUpdate(payload) {
  const { rsf, analytics } = yield call([FirebaseFactory, 'get']);
  const { uid } = yield select(state => state.auth.user);
  const { surveyStarted, selected } = yield select(state => state.survey);

  if (!uid || !surveyStarted) {
    throw new Error('nope');
  }

  const data = {};
  data[surveyStarted] = selected;

  try {
    yield call(rsf.firestore.setDocument, `surveyResponses/${uid}/`, data, {
      merge: true,
    });

    yield put(actions.surveySyncSucceeded());
    try {
      analytics.logEvent('Survey Question Answered', { ...selected });
    } catch (ae) {
      console.log(ae);
    }
  } catch (error) {
    yield put(actions.surveySyncFailed());
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
  yield takeEvery(constants.SURVEY_SELECTION_SET, handleUpdate);
}
