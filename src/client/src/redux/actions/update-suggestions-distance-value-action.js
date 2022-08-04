import actionTypes from "./constants";

const updateSuggestionsOrBrainmates = (distance) => ({
  type: actionTypes.UPDATE_SUGGESTION_DISTANCE,
  payload: distance,
});

export const updateSuggestionsOrBrainmatesAction = (distance) => {
  return async (dispatch) => {
    dispatch(updateSuggestionsOrBrainmates(distance));
  };
};
