import actionTypes from "../actions/constants";

const initialState = {
  answers: [],
  answerIndex: 0,
};

const answersEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };

    case actionTypes.INCREMENT_ANSWER_INDEX:
      return {
        ...state,
        answerIndex: state.answerIndex + 1,
      };

      case actionTypes.CLEAR_ANSWERS_ARRAY:
      return {
        ...state,
        answers: [],
      };

    default:
      return state;
  }
};

export default answersEntitiesReducer;
