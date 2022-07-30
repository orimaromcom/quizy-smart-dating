import actionTypes from "./constants";

const incrementAnswersIndexAction = () => ({
  type: actionTypes.INCREMENT_ANSWER_INDEX,
});

export const incrementAnswersIndex = () => {
  return async (dispatch) => {
    dispatch(incrementAnswersIndexAction());
  };
};
