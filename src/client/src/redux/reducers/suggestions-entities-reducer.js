import actionTypes from "../actions/constants";

const initialState = {
  suggestions: {},
  suggestionsOrBrainmates: "brainmates",
};
const suggestionsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        suggestions: action.payload,
      };

    case actionTypes.CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: {},
      };

    case actionTypes.UPDATE_SUGGESTION_OR_BRAINMATES:
      return {
        ...state,
        suggestionsOrBrainmates: action.payload,
      };

    default:
      return state;
  }
};

export default suggestionsEntitiesReducer;
