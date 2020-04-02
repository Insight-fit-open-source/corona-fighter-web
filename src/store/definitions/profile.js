import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  // Has the user completed the on-boarding process
  onBoardingComplete: false,
  // The last time the user was seen
  lastCheckin: '',
  // The screening history of the user
  medicalHistory: {},
  // When the user account was created
  createdAt: '',
  // When the user account was last updated
  updatedAt: '',
};

const definition = {
  PROFILE_SYNCED: (state, { payload }) => ({
    ...state,
    ...payload,
    lastCallFailed: false,
  }),
  PROFILE_SYNC_FAILED: state => ({ ...state, lastCallFailed: true }),
  CHECKIN: state => ({ ...state }),
  COMPLETE_ONBOARDING: state => ({ ...state }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
