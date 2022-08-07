import actionTypes from "../actions/constants";

const initialState = {
  questions: [],
  questionIndex: 0,
  questionsLoading: false,
  quote: null,
};

const questionsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...action.payload],
        questionsLoading: false,
      };

    case actionTypes.FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        questionsLoading: true,
      };

    case actionTypes.INCREMENT_QUESTION_INDEX:
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };

      case actionTypes.CLEAR_QUESTION_INDEX:
        return {
          ...state,
          questionIndex: 0,
        };

      case actionTypes.CLEAR_QUESTIONS_ARRAY:
        return {
          ...state,
          questions: [],
        };

      case actionTypes.UPDATE_QUOTE:
        return {
          ...state,
          quote: action.payload,
        };

    default:
      return state;
  }
};

export default questionsEntitiesReducer;
