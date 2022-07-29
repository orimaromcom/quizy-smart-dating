import actionTypes from "./constants";
import {
  getAllQuestions,
  getQuestionIndex,
} from "../selectors/questions-entities-selectors";

const incrementQuestionIndexAction = () => ({
  type: actionTypes.INCREMENT_QUESTION_INDEX,
});

export const incrementQuestionIndex = () => {
  return async (dispatch) => {
    dispatch(incrementQuestionIndexAction());
  };
};
