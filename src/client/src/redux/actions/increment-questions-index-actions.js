import actionTypes from "./constants";

const incrementQuestionIndex = () => ({
  type: actionTypes.INCREMENT_QUESTION_INDEX,
});

export const incrementQuestionIndexAction = () => {
  return async (dispatch) => {
    dispatch(incrementQuestionIndex());
  };
};
