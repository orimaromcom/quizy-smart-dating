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
      
      //**********We need to add a loader until the questions arrive */
      //**********Why do we need get questions by Ids?*************************
      /*     const questionsByIds = questions.reduce((acc, quest) => {
        acc[quest.id] = quest;
        return acc;
      }, {}); */
      dispatch(fetchQuestionsSuccessAction(questions));
    } catch (e) {
      dispatch(fetchQuestionsFailureAction());
    }
  };
};
