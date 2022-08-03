import actionTypes from "../actions/constants";

const initialState = {
  suggestions: {},
  suggestionDistance: "closest",
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
        suggestions: Object.keys(state.suggestions).forEach((key) => {
          delete state.suggestions[key];
        }),
      };

    case actionTypes.UPDATE_SUGGESTION_DISTANCE:
      return {
        ...state,
        suggestionDistance: action.payload,
      };

    default:
      return state;
  }
};

export default suggestionsEntitiesReducer;
