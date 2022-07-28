import actionTypes from "./constants";
const addAnswerAction = (answer) => ({
  type: actionTypes.ADD_ANSWER,
  payload: answer,
});

export const addAnswer = (answer) => {
  return async (dispatch) => {
    console.log("In action")
    dispatch(addAnswerAction(answer));
  };
};
