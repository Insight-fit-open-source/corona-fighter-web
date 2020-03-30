import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  selected: {},
};

const definition = {
  SURVEY_SELECTION_SET: (state, { payload }) => ({
    ...state,
    selected: {
      ...state.selected,
      ...payload,
    },
  }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
