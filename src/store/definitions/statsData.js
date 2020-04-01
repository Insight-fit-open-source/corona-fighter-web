import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  cumulative: [],
  daily: {},
};

const definition = {
  CUMULATIVE_SYNCED: (state, { payload }) => ({
    ...state,
    cumulative: payload.data,
  }),
  DAILY_SYNCED: (state, { payload }) => ({
    ...state,
    daily: payload,
  }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
