import actionTypes from "./constants";

export const clearQuestionsArray = () => ({
  type: actionTypes.CLEAR_QUESTIONS_ARRAY,
});

export const clearQuestionsArrayAction = () => {
    return async (dispatch) => {
      dispatch(clearQuestionsArray());
    };
  };
