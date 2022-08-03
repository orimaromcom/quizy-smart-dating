import actionTypes from "./constants";
const clearSuggestions = () => ({
  type: actionTypes.CLEAR_SUGGESTIONS,
});

export const clearSuggestionsAction = () => {
  console.log("in action")
  return async (dispatch) => {
    dispatch(clearSuggestions());
  };
};
