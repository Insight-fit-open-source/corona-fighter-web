// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js',
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyBXrg6GEVTaeeHjD8XJj9gJnocNmk1Skak',
  authDomain: 'corona-se-push-staging.firebaseapp.com',
  databaseURL: 'https://corona-se-push-staging.firebaseio.com',
  projectId: 'corona-se-push-staging',
  storageBucket: 'corona-se-push-staging.appspot.com',
  messagingSenderId: '966661181602',
  appId: '1:966661181602:web:0b0911b19a3cefe21bc7fb',
  measurementId: 'G-QFC4GSCXKR',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging.isSupported() ? firebase.messaging() : Promise.reject();
