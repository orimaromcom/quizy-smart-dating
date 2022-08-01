import actionTypes from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  pageButtonValue: "quiz",
};

const appViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTIONS_REQUEST:
    case actionTypes.FETCH_ACHIEVEMENTS_REQUEST:
    case actionTypes.FETCH_BRAINMATES_REQUEST:
    case actionTypes.FETCH_PROFILE_REQUEST:
    case actionTypes.UPDATE_PROFILE_REQUEST: {
      return { ...state, isLoading: true };
    }

    case actionTypes.UPDATE_PROFILE_SUCCESS:
    case actionTypes.FETCH_PROFILE_SUCCESS:
    case actionTypes.FETCH_BRAINMATES_SUCCESS:
    case actionTypes.FETCH_ACHIEVEMENTS_SUCCESS:
    case actionTypes.FETCH_QUESTIONS_SUCCESS: {
      return { ...state, isError: false, isLoading: false };
    }

    case actionTypes.UPDATE_PROFILE_FAILURE:
    case actionTypes.FETCH_PROFILE_FAILURE:
    case actionTypes.FETCH_BRAINMATES_FAILURE:
    case actionTypes.FETCH_ACHIEVEMENTS_FAILURE:
    case actionTypes.FETCH_QUESTIONS_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }

    case actionTypes.UPDATE_PAGE_BUTTON:

    return {
        ...state,
        pageButtonValue: action.payload
    }

    default:
      return state;
  }
};
export default appViewReducer;
