/**
 * Front end configuration. This config is always included in the front end package, and is considered safe to
 * distribute. The defaults here are for the staging environment, to help with open-source development.
 */
export default {
  FIREBASE_CONFIG: {
    apiKey: process.env.API_KEY || 'AIzaSyBXrg6GEVTaeeHjD8XJj9gJnocNmk1Skak',
    authDomain:
      process.env.AUTH_DOMAIN || 'corona-se-push-staging.firebaseapp.com',
    databaseURL:
      process.env.DATABASE_URL ||
      'https://corona-se-push-staging.firebaseio.com',
    projectId: process.env.PROJECT_ID || 'corona-se-push-staging',
    storageBucket:
      process.env.STORAGE_BUCKET || 'corona-se-push-staging.appspot.com',
    messagingSenderId: process.env.MESSAGING_SENDER_ID || '966661181602',
    appId: process.env.APP_ID || '1:966661181602:web:0b0911b19a3cefe21bc7fb',
    measurementId: process.env.MEASUREMENT_ID || 'G-QFC4GSCXKR',
  },
  GOOGLE_API_KEY: 'AIzaSyCorQm3g4mBVQQdaoVKxB4kYto3v5WIiD0',
};
