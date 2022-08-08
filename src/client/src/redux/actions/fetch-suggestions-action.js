import actionTypes from "./constants";
import SuggestionsApiService from "../../services/suggestions-api-service";

const fetchSuggestionsRequest = () => ({
  type: actionTypes.FETCH_SUGGESTIONS_REQUEST,
});

export const fetchSuggestionsSuccess = (suggestions) => ({
  type: actionTypes.FETCH_SUGGESTIONS_SUCCESS,
  payload: suggestions,
});

const fetchSuggestionsFailure = (errorMessage) => ({
  type: actionTypes.FETCH_SUGGESTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchNewSuggestionsAction = (userId) => {
  return async (dispatch) => {
    dispatch(fetchSuggestionsRequest());
    try {
      const suggestions = await SuggestionsApiService.getSuggestions(userId);
      dispatch(fetchSuggestionsSuccess(suggestions));
    } catch (e) {
      dispatch(fetchSuggestionsFailure(e.message));
    }
  };
};
