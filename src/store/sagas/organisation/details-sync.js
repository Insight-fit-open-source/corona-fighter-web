import { call, fork, select, takeLatest } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { actions, constants } from 'src/store/definitions/organisation';

export function* subscribe() {
  const { rsf } = yield call([FirebaseFactory, 'get']);
  const { user, authInProcess } = yield select(state => state.auth);

  if (authInProcess || !user) {
    console.log('auth stuff');
    return;
  }

  try {
    const userId = user.uid;

    yield fork(rsf.firestore.syncDocument, `profiles/${userId}`, {
      successActionCreator: actions.organisationDetailsSyncSucceeded,
      transform: doc => {
        const data = doc.data();
        if (!data || !data.organisation) {
          return {};
        }
        return data.organisation;
      },
    });
  } catch (error) {
    console.log('Profile Sync Error:', error);
  }
}

export default function* root() {
  yield takeLatest(constants.ORGANISATION_DETAILS_SYNC_REQUESTED, subscribe);
}
