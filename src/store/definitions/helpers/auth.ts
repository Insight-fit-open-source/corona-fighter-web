interface AuthState {
  init: boolean;
  user: object;
  userToken: string;
  authInProcess: boolean;
  messagingToken: string;
}

/**
 * flag whether we've started the session on the client or not
 * so we can avoid client only functionality like long running
 * subscriptions to server events etc.
 */
export const clientSessionStarted = (state: AuthState): AuthState => ({
  ...state,
  init: true,
});

/**
 * flag whether we've a logout has been requested
 */
export const signOutRequested = (state: AuthState): AuthState => ({ ...state });

/**
 * provide basic authentication details,  that will
 be used to show and hide User specific controls
 and content
 */
export const signOutSuccess = (state: AuthState): AuthState => ({
  ...state,
  user: null,
  userToken: null,
  authInProcess: false,
});

/**
 * flag whether we've a logout has been requested
 */
export const signOutFailure = (state: AuthState): AuthState => ({ ...state });

/**
 * provide basic authentication details,  that will
 * be used to show and hide User specific controls
 * and content
 */
export const authStateChanged = (state: AuthState, { payload }): AuthState => ({
  ...state,
  user: payload.user,
  userToken: payload.userToken,
  authInProcess: payload.authInProcess,
});

/**
 * saves the firebase cloud messaging token
 */
export const messagingTokenReceived = (
  state: AuthState,
  { payload },
): AuthState => ({
  ...state,
  messagingToken: payload.token,
});
