import duxedo from '@sigmadigital/duxedo';

import * as helpers from 'src/store/definitions/helpers/auth';

const defaultState = {
  init: false,
  user: null,
  userToken: null,
  authInProcess: true,
  messagingToken: '',
};

const definition = {
  CLIENT_SESSION_STARTED: helpers.clientSessionStarted,
  SIGN_OUT_REQUESTED: helpers.signOutRequested,
  SIGN_OUT_SUCCESS: helpers.signOutSuccess,
  SIGN_OUT_FAILURE: helpers.signOutFailure,
  AUTH_STATE_CHANGED: helpers.authStateChanged,
  MESSAGING_TOKEN_RECEIVED: helpers.messagingTokenReceived,
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});
export { reducer, actions, constants, defaultState as state };

export default reducer;
