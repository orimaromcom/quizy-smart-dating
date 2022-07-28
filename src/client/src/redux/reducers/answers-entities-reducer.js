import actionTypes from "../actions/constants";

const initialState = {
  answers: [],
};

const answersEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };

    default:
      return state;
  }
};

export default answersEntitiesReducer;
