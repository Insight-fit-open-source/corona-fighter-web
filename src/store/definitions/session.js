import duxedo from '@sigmadigital/duxedo';

const defaultState = {
  menuIsOpen: false,
};

const definition = {
  SET_MENU_STATE: (state, { payload }) => ({
    ...state,
    menuIsOpen: payload.menuIsOpen,
  }),
};

const { reducer, actions, constants } = duxedo({
  definition,
  defaultState,
});
export { reducer, actions, constants, defaultState as state };

export default reducer;
