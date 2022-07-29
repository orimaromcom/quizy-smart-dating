import actionTypes from "../actions/constants";

const initialState = {
  questions: [],
  questionIndex: 0,
};

const questionsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload],
      };

    case actionTypes.INCREMENT_QUESTION_INDEX:
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };

    default:
      return state;
  }
};

export default questionsEntitiesReducer;
