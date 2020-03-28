/**
 * flag whether we've started the session on the client or not
 so we can avoid client only functionality like long running
 subscriptions to server events etc.
 * @param state
 * @returns {{init: boolean}}
 */
export const clientSessionStarted = state => ({ ...state, init: true });

/**
 * flag whether we've a logout has been requested
 * @param state
 * @returns {{init: boolean}}
 */
export const signOutRequested = state => ({ ...state });

/**
 * provide basic authentication details,  that will
 be used to show and hide User specific controls
 and content
 * @param state
 * @returns {{userToken: (*|null), authInProcess: *, user: *}}
 */
export const signOutSuccess = state => ({
  ...state,
  user: null,
  userToken: null,
  authInProcess: false,
});

/**
 * flag whether we've a logout has been requested
 * @param state
 * @returns {{init: boolean}}
 */
export const signOutFailure = state => ({ ...state });

/**
 * provide basic authentication details,  that will
 be used to show and hide User specific controls
 and content
 * @param state
 * @returns {{userToken: (*|null), authInProcess: *, user: *}}
 */
export const authStateChanged = (state, { payload }) => ({
  ...state,
  user: payload.user,
  userToken: payload.userToken,
  authInProcess: payload.authInProcess,
});
