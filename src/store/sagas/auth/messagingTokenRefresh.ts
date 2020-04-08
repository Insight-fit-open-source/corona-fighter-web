import { call, select, take, put } from 'redux-saga/effects';
import FirebaseFactory from 'src/app/lib/firebase';
import { actions } from 'src/store/definitions/auth';

export default function* root() {
  try {
    const { rsf } = yield call([FirebaseFactory, 'get']);
    const { user } = yield select(state => state.auth);
    const channel = rsf.messaging.tokenRefreshChannel();
    while (true) {
      const token = yield take(channel);
      console.log('token:', token);

      if (user) {
        const userId = user.uid;
        yield put(actions.messagingTokenReceived({ token }));
        yield call(
          rsf.firestore.updateDocument,
          `profiles/${userId}`,
          'messagingToken',
          token,
        );
      }
    }
  } catch (error) {
    console.log('Messaging Token Sync Error:', error);
  }
}
