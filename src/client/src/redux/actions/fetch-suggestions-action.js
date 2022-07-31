import actionTypes from "./constants";
import SuggestionsApiService from "../../services/questions-api-service";

const fetchSuggestionsRequestAction = () => ({
  type: actionTypes.FETCH_SUGGESTIONS_REQUEST,
});

const fetchSuggestionsSuccessAction = (suggestions) => ({
  type: actionTypes.FETCH_SUGGESTIONS_SUCCESS,
  payload: suggestions,
});

const fetchSuggestionsFailureAction = (error) => ({
  type: actionTypes.FETCH_SUGGESTIONS_FAILURE,
  payload: error?.message ?? error,
});

export const fetchNewSuggestions = () => {
  return async (dispatch) => {
    dispatch(fetchQuestionsRequestAction());
    try {
      const suggestions = await SuggestionsApiService.getSuggestions();

      dispatch(fetchSuggestionsSuccessAction(suggestions));
    } catch (e) {
      dispatch(fetchSuggestionsFailureAction(e));
    }
  };
};
