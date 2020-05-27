import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  // name of organisation
  name: 'false',
  // email to send all surveys to
  email: 'false',
  // When the organisation was created
  createdAt: '',
  // When the organisation was last updated
  updatedAt: '',
  organisationSyncInProcess: true,
};

const definition = {
  ORGANISATION_SYNC_REQUESTED: (state, { payload }) => ({
    ...state,
    ...payload,
    lastCallFailed: false,
    organisationSyncInProcess: false,
  }),
  ORGANISATION_SYNC_SUCCEEDED: state => ({ ...state, lastCallFailed: true }),
  ORGANISATION_SYNC_FAILED: state => ({ ...state, lastCallFailed: true }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
