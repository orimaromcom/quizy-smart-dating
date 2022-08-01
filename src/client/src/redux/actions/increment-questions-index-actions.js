import actionTypes from "./constants";
// import {
//   getAllQuestions,
//   getQuestionIndex,
// } from "../selectors/questions-entities-selectors";

const incrementQuestionIndex = () => ({
  type: actionTypes.INCREMENT_QUESTION_INDEX,
});

export const incrementQuestionIndexAction = () => {
  return async (dispatch) => {
    dispatch(incrementQuestionIndex());
  };
};
