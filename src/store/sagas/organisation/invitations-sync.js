import { call, fork, select, takeLatest } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { actions, constants } from 'src/store/definitions/organisation';

export function* subscribe({ payload }) {
  const { rsf, firestore } = yield call([FirebaseFactory, 'get']);
  const { user, authInProcess } = yield select(state => state.auth);
  if (authInProcess || !user) {
    return;
  }

  try {
    const userId = user.uid;
    console.log(userId);

    yield fork(
      rsf.firestore.syncCollection,
      firestore.collection('invitations').where('organisationId', '==', userId),
      {
        successActionCreator: actions.organisationInvitationsSyncSucceeded,
        transform: collection => {
          const invitations = collection.docs.map(x => {
            return {
              dateSent: x.get('dateSent'),
              invitationAccepted: x.get('invitationAccepted'),
              invitationCode: x.get('invitationCode'),
              organisationId: x.get('organisationId'),
              userEmailAddress: x.get('userEmailAddress'),
              userId: x.get('userId'),
            };
          });
          // const data = doc.data();
          // if (!data) {
          //   return {};
          // }

          // return data;
          console.log(invitations);
          return invitations;
        },
      },
    );
  } catch (error) {
    console.log('Profile Sync Error:', error);
  }
}

export default function* root() {
  yield takeLatest(
    constants.ORGANISATION_INVITATIONS_SYNC_REQUESTED,
    subscribe,
  );
}
