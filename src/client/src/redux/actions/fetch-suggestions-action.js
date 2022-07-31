import actionTypes from "./constants";
import SuggestionsApiService from "../../services/questions-api-service";

const fetchSuggestionsRequest = () => ({
  type: actionTypes.FETCH_SUGGESTIONS_REQUEST,
});

const fetchSuggestionsSuccess = (suggestions) => ({
  type: actionTypes.FETCH_SUGGESTIONS_SUCCESS,
  payload: suggestions,
});

const fetchSuggestionsFailure = (error) => ({
  type: actionTypes.FETCH_SUGGESTIONS_FAILURE,
  payload: error?.message ?? error,
});

export const fetchNewSuggestionsAction = () => {
  return async (dispatch) => {
    dispatch(fetchSuggestionsRequest());
    try {
      const suggestions = await SuggestionsApiService.getSuggestions();

      dispatch(fetchSuggestionsSuccess(suggestions));
    } catch (e) {
      dispatch(fetchSuggestionsFailure(e));
    }
  };
};
