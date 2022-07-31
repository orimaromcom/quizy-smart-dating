import actionTypes from "../actions/constants";

const initialState = {
  suggestions: [],
};

const suggestionsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        suggestions: [...state.suggestions, ...action.payload],
      };

    default:
      return state;
  }
};

export default suggestionsEntitiesReducer;
