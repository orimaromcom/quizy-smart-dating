import actionTypes from "./constants";
const clearAnswersArrayAction = () => ({
  type: actionTypes.CLEAR_ANSWERS_ARRAY,
});

export const clearAnswersArray = () => {
    return async (dispatch) => {
      dispatch(clearAnswersArrayAction());
    };
  };