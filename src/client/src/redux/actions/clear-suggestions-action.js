import actionTypes from "./constants";

export const clearSuggestions = () => ({
  type: actionTypes.CLEAR_SUGGESTIONS,
});

export const clearSuggestionsAction = () => {
  return async (dispatch) => {
    dispatch(clearSuggestions());
  };
};
