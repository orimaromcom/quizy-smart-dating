import actionTypes from "./constants";
import AnswersApiService from "../../services/answers-api-service";

const postAnswersRequest = () => ({
  type: actionTypes.POST_ANSWERS_REQUEST,
});

const postAnswersSuccess = () => ({
  type: actionTypes.POST_ANSWERS_SUCCESS,
});

const postAnswersFailure = (errorMessage) => ({
  type: actionTypes.POST_ANSWERS_FAILURE,
  payload: errorMessage,
});

export const postAnswersAction = (userId) => {
  return async (dispatch) => {
    dispatch(postAnswersRequest());
    try {
      await AnswersApiService.postAnswers(userId);
      dispatch(postAnswersSuccess());
    } catch (e) {
      dispatch(postAnswersFailure(e.message));
    }
  };
};
