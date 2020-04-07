import firebase from 'firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase';
import settings from 'src/app/publicSettings';
import 'firebase/functions';

export default class FirebaseFactory {
  static async get() {
    if (!(typeof window !== 'undefined')) {
      return {};
    }
    await import('firebase/auth');
    await import('firebase/firestore');
    await import('firebase/storage');
    await import('firebase/messaging');

    // firebase is stateful so we have to prevent reinitialization
    if (!firebase.apps.length) {
      try {
        await firebase.initializeApp({ ...settings.FIREBASE_CONFIG });
      } catch (err) {
        if (!/already exists/.test(err.message)) {
          // eslint-disable-next-line no-console
          console.log('Firebase initialization error', err.stack);
        } else {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      }
    }

    const functions = await firebase.functions();
    const firestore = await firebase.firestore();
    const auth = await firebase.auth();
    const storage = await firebase.storage();
    const messaging = await firebase.messaging();

    const rsf = await new ReduxSagaFirebase(firebase);
    return { firebase, rsf, functions, auth, firestore, storage, messaging };
  }
}
