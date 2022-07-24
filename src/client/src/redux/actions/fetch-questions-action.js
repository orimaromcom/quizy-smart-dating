import actionTypes from "./constants";
import QuestionsApiService from "../../services/questions-api-service";

const fetchQuestionsRequestAction = () => ({
  type: actionTypes.FETCH_QUESTIONS_REQUEST,
});

const fetchQuestionsSuccessAction = (questions) => ({
  type: actionTypes.FETCH_QUESTIONS_SUCCESS,
  questions,
});

const fetchQuestionsFailureAction = () => ({
  type: actionTypes.FETCH_QUESTIONS_FAILURE,
});

export const fetchNewQuestions = () => {
  return async (dispatch) => {
    dispatch(fetchQuestionsRequestAction());
    try {
      const questions = await QuestionsApiService.getQuestions();
      debugger;
      const questionsByIds = questions.reduce((acc, quest) => {
        acc[quest.id] = quest;
        return acc;
      }, {});

      dispatch(fetchQuestionsSuccessAction(questionsByIds));
    } catch (e) {
      dispatch(fetchQuestionsFailureAction());
    }
  };
};
