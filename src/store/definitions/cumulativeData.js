import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  data: [],
};

const definition = {
  GET_DATA_SUCCESS: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  GET_DATA_FAILED: state => ({ ...state }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
