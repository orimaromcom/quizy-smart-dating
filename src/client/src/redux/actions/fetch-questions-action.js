import actionTypes from "./constants";
import QuestionsApiService from "../../services/questions-api-service";

const fetchQuestionsRequest = (loadingMessage) => ({
  type: actionTypes.FETCH_QUESTIONS_REQUEST,
  payload: loadingMessage,
});

const fetchQuestionsSuccess = (questions) => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: questions,
});

const fetchQuestionsFailure = (errorMessage) => ({
  type: actionTypes.FETCH_QUESTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchNewQuestionsAction = () => {
  return async (dispatch) => {
    dispatch(fetchQuestionsRequest("Loading questions..."));
    try {
      const questions = await QuestionsApiService.getQuestions();
      dispatch(fetchQuestionsSuccess(questions));
    } catch (e) {
      dispatch(fetchQuestionsFailure(e.message));
    }
  };
};
