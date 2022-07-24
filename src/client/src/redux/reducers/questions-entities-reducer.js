import actionTypes from "../actions/constants";

const initialState = {};

const questionsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_SUCCESS: {
      const { questions } = action;
      return { ...questions };
    }

    default:
      return state;
  }
};

export default questionsEntitiesReducer;
