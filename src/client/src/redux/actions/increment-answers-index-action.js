import actionTypes from "./constants";

export const incrementAnswersIndex = () => ({
  type: actionTypes.INCREMENT_ANSWER_INDEX,
});

export const incrementAnswersIndexAction = () => {
  return async (dispatch) => {
    dispatch(incrementAnswersIndex());
  };
};
