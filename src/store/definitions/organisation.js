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

  ORGANISATION_INVITATIONS_SYNC_REQUESTED: state => ({ ...state }),
  ORGANISATION_INVITATIONS_SYNC_SUCCEEDED: (state, { payload }) => ({
    ...state,
    invitations: { ...payload },
    lastCallFailed: false,
  }),
  ORGANISATION_INVITATIONS_SYNC_FAILED: state => ({
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
  ORGANISATION_INVITATION_ADDED: state => ({ ...state }),
  ORGANISATION_INVITATION_REMOVED: state => ({ ...state }),
  // ORGANISATION_DETAILS_SYNC_REQUESTED: state => ({ ...state }),
  // ORGANISATION_DETAILS_SYNC_SUCCEEDED: (state, { payload }) => {
  //   return {
  //     ...state,
  //     name: payload.name ?? '',
  //     email: payload.email ?? '',
  //     lastCallFailed: false,
  //   };
  // },
  // ORGANISATION_DETAILS_SYNC_FAILED: state => ({
  //   ...state,
  //   lastCallFailed: true,
  // }),

  // ORGANISATION_INVITATIONS_SYNC_REQUESTED: state => ({ ...state }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
