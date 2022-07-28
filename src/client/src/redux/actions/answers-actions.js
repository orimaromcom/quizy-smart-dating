const addAnswerAction = (answer) => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: answer,
});

export const addAnswer = (answer) => {
  return async (dispatch) => {
    dispatch(addAnswerAction(answer));
  };
};
