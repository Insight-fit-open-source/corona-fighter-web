import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  selected: {},
  surveyStarted: null,
  lastCallFailed: false,
  surveyResults: {},
};

const definition = {
  SURVEY_SELECTION_SET: (state, { payload }) => ({
    ...state,
    selected: {
      ...state.selected,
      ...payload,
    },
  }),
  SURVEY_STARTED: state => ({
    ...state,
    surveyStarted: state.surveyStarted || Date.now(),
  }),
  SURVEY_COMPLETED: state => ({
    ...state,
    surveyStarted: null,
  }),
  SURVEY_SYNC_REQUESTED: state => ({ ...state }),
  SURVEY_SYNC_SUCCEEDED: (state, { payload }) => ({
    ...state,
    surveyResults: { ...payload },
    lastCallFailed: false,
  }),
  SURVEY_SYNC_FAILED: state => ({ ...state, lastCallFailed: true }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});

export { reducer, actions, constants, defaultState as state };

export default reducer;
