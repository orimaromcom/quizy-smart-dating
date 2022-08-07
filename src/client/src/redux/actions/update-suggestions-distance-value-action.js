import actionTypes from "./constants";

export const updateSuggestionsOrBrainmates = (suggestionsOrBrainmates) => ({
  type: actionTypes.UPDATE_SUGGESTION_OR_BRAINMATES,
  payload: suggestionsOrBrainmates,
});

export const updateSuggestionsOrBrainmatesAction = (suggestionsOrBrainmates) => {
  return async (dispatch) => {
    dispatch(updateSuggestionsOrBrainmates(suggestionsOrBrainmates));
  };
};
