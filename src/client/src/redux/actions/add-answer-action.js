import actionTypes from "./constants";
const addAnswerAction = (answer) => ({
  type: actionTypes.ADD_ANSWER,
  payload: answer,
});

export const addAnswer = (answer) => {
  return async (dispatch) => {
    dispatch(addAnswerAction(answer));
  };
};
