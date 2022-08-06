import actionTypes from "./constants";
export const addAnswer = (answer) => ({
  type: actionTypes.ADD_ANSWER,
  payload: answer,
});

export const addAnswerAction = (answer, answersArray, questions) => {
  return async (dispatch) => {
    dispatch(addAnswer(answer, answersArray, questions));
  };
};
