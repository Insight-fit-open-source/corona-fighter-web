import { call, fork, takeLatest, select } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import {
  actions,
  constants as surveyConstants,
} from 'src/store/definitions/survey';
import { constants } from 'src/store/definitions/auth';

export function* subscribe() {
  const { rsf } = yield call([FirebaseFactory, 'get']);
  const { user, authInProcess } = yield select(state => state.auth);

  if (authInProcess || !user) {
    return;
  }

  try {
    const userId = user.uid;

    yield fork(rsf.firestore.syncDocument, `surveyResponses/${userId}`, {
      successActionCreator: actions.surveySyncSucceeded,
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
  yield takeLatest(surveyConstants.SURVEY_SYNC_REQUESTED, subscribe);
}
