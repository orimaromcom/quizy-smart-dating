import actionTypes from "./constants";
const clearQuestionsIndex = () => ({
  type: actionTypes.CLEAR_QUESTION_INDEX,
});

export const clearQuestionsIndexAction = () => {
    return async (dispatch) => {
      dispatch(clearQuestionsIndex());
    };
  };