import actionTypes from "./constants";
const clearSuggestions = () => ({
  type: actionTypes.CLEAR_SUGGESTIONS,
});

export const clearSuggestionsAction = () => {
  return async (dispatch) => {
    dispatch(clearSuggestions());
  };
};
