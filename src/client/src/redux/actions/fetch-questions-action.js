import actionTypes from "./constants";
import QuestionsApiService from "../../services/questions-api-service";

const fetchQuestionsRequestAction = () => ({
  type: actionTypes.FETCH_QUESTIONS_REQUEST,
});

const fetchQuestionsSuccessAction = (questions) => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

const fetchQuestionsFailureAction = (error) => ({
  type: actionTypes.FETCH_QUESTIONS_FAILURE,
  payload: error?.message ?? error,
});

export const fetchNewQuestions = () => {
  return async (dispatch) => {
    dispatch(fetchQuestionsRequestAction());
    try {
      const questions = await QuestionsApiService.getQuestions();

      dispatch(fetchQuestionsSuccessAction(questions));
    } catch (e) {
      dispatch(fetchQuestionsFailureAction(e));
    }
  };
};
