import actionTypes from "../actions/constants";

const initialState = {
  quizOngoing: false,
};

const quizLogicEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUIZ_ONGOING:
      return {
        ...state,
        quizOngoing: true,
      };

    case actionTypes.QUIZ_FINISHED:
      return {
        ...state,
        quizOngoing: false,
      };

    default:
      return state;
  }
};

export default quizLogicEntitiesReducer;
