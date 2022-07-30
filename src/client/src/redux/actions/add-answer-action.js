import actionTypes from "./constants";
const addAnswerAction = (answer) => ({
  type: actionTypes.ADD_ANSWER,
  payload: answer,
});

export const addAnswer = (answer, answersArray, questions) => {
  return async (dispatch) => {
    dispatch(addAnswerAction(answer, answersArray, questions));
    
  };
};
