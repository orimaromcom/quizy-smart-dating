import actionTypes from "../actions/constants";

const initialState = {
  
};

const questionsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_SUCCESS: {
      const { questions } = action;
      return { ...questions };
    }

    case actionTypes.REMOVE_QUESTION_REQUEST: {
      const { question } = action;
      const questionsEntities = { ...state };
      delete questionsEntities[question.id];
      return questionsEntities;
    }

    default:
      return state;
  }
};

export default questionsEntitiesReducer;
