import actionTypes from "./constants";

const removeQuestionAction = (question) => ({
  type: actionTypes.REMOVE_QUESTION_REQUEST,
  question,
});

export const removeQuestion = (question) => {
  return (dispatch) => dispatch(removeQuestionAction(question));
};
