import actionTypes from "./constants";
import UserApiService from "../../services/user-api-service";

const setTriviaRequest = () => ({
  type: actionTypes.SET_TRIVIA_REQUEST,
});

const setTriviaSuccess = () => ({
  type: actionTypes.SET_TRIVIA_SUCCESS,
});

const setTriviaFailure = (errorMessage) => ({
  type: actionTypes.SET_TRIVIA_FAILURE,
  payload: errorMessage,
});

export const setTriviaAction = (userId) => {
  return async (dispatch) => {
    dispatch(setTriviaRequest());
    try {
      await UserApiService.setTriviaStatistics(userId);
      dispatch(setTriviaSuccess());
    } catch (e) {
      dispatch(setTriviaFailure(e.message));
    }
  };
};
