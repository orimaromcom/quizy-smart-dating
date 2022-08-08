import actionTypes from "./constants";

export const clearAnswersArray = () => ({
  type: actionTypes.CLEAR_ANSWERS_ARRAY,
});

export const clearAnswersArrayAction = () => {
    return async (dispatch) => {
      dispatch(clearAnswersArray());
    };
  };
