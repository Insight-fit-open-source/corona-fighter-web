import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  // name of organisation
  name: 'false',
  // email to send all surveys to
  email: 'false',
  invitations: [],
  // When the organisation was created
  updatedAt: '',
  lastCallFailed: false,
};

const definition = {
  ORGANISATION_DETAILS_SYNC_REQUESTED: state => ({ ...state }),
  ORGANISATION_DETAILS_SYNC_SUCCEEDED: (state, { payload }) => {
    return {
      ...state,
      name: payload.name ?? '',
      email: payload.email ?? '',
      lastCallFailed: false,
    };
  },
  ORGANISATION_DETAILS_SYNC_FAILED: state => ({
    ...state,
    lastCallFailed: true,
  }),
  ORGANISATION_DETAILS_UPDATED: (state, { payload }) => {
    const x = {
      ...state,
      name: payload.name,
      email: payload.email,
    };
    return x;
  },
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
