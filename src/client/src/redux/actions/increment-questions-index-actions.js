import actionTypes from "./constants";

const incrementQuestionIndexAction = () => ({
  type: actionTypes.INCREMENT_QUESTION_INDEX,
});

export const incrementQuestionIndex = () => {
  return async (dispatch) => {
    dispatch(incrementQuestionIndexAction());
  };
};
