import actionTypes from "../actions/constants";

const initialState = {
  questions: [],
};

const questionsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload],
      };

    default:
      return state;
  }
};

export default questionsEntitiesReducer;
