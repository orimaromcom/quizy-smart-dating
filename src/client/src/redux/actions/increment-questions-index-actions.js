import actionTypes from "./constants";

export const incrementQuestionIndex = () => ({
  type: actionTypes.INCREMENT_QUESTION_INDEX,
});

export const incrementQuestionIndexAction = () => {
  return async (dispatch) => {
    dispatch(incrementQuestionIndex());
  };
};
