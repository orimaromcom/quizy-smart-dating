import actionTypes from "../actions/constants";

const initialState = {
  suggestions: {},
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
      suggestions: (Object.keys(state.suggestions).forEach(key => {
          delete state.suggestions[key];
        }))
      };

    default:
      return state;
  }
};

export default suggestionsEntitiesReducer;
