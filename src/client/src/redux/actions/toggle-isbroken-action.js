import actionTypes from "./constants";
const toggleIsBroken = () => ({
  type: actionTypes.TOGGLE_IS_BROKEN,
});

export const toggleIsBrokenAction = () => {
  return async (dispatch) => {
    dispatch(toggleIsBroken());
  };
};
