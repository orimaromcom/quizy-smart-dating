import actionTypes from "./constants";

const updateSuggestionDistance = (distance) => ({
  type: actionTypes.UPDATE_SUGGESTION_DISTANCE,
  payload: distance,
});

export const updateSuggestionDistanceAction = (distance) => {
    console.log("in action")
  return async (dispatch) => {
    dispatch(updateSuggestionDistance(distance));
  };
};
