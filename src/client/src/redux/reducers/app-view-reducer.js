import actionTypes from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "error",
  pageButtonValue: "login",
  isSuccess: false,
  successMessage: "Success!",
  totalScore: 0,
};

const appViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HIDE_TOASTER:
      return { ...state, isError: false, isSuccess: false };

    // case actionTypes.FETCH_BRAINMATES_REQUEST:
    // case actionTypes.FETCH_ACHIEVEMENTS_REQUEST:
    // case actionTypes.FETCH_SUGGESTIONS_REQUEST:
    case actionTypes.UPDATE_PROFILE_REQUEST:
    case actionTypes.FETCH_QUESTIONS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actionTypes.FETCH_PROFILE_SUCCESS:
    case actionTypes.FETCH_BRAINMATES_SUCCESS:
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
    case actionTypes.POST_DISTANCES_SUCCESS:
    case actionTypes.FETCH_SUGGESTIONS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case actionTypes.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        successMessage: action.payload.SuccessMessage,
      };
    }

    case actionTypes.UPDATE_PROFILE_FAILURE:
    case actionTypes.FETCH_PROFILE_FAILURE:
    case actionTypes.FETCH_BRAINMATES_FAILURE:
    case actionTypes.FETCH_ACHIEVEMENTS_FAILURE:
    case actionTypes.FETCH_SUGGESTIONS_FAILURE:
    case actionTypes.POST_DISTANCES_FAILURE:
    case actionTypes.POST_ANSWERS_FAILURE:
    case actionTypes.SET_TRIVIA_FAILURE:
    case actionTypes.POST_USER_LIKE_FAILURE:
    case actionTypes.FETCH_QUESTIONS_FAILURE: {
      let errorMessage = action.payload;
      if (action.payload === "Request failed with status code 404") {
        errorMessage = "Not found";
      } else if (action.payload === "Request failed with status code 500") {
        errorMessage = "Server problems";
      }
      return {
        ...state,
        isError: true,
        errorMessage: errorMessage,
        isLoading: false,
      };
    }

    case actionTypes.SHOW_ERROR: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        errorMessage: action.payload,
      };
    }

    case actionTypes.SHOW_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isError: false,
        successMessage: action.payload,
      };
    }

    case actionTypes.UPDATE_PAGE_BUTTON:
      return {
        ...state,
        pageButtonValue: action.payload,
      };

    case actionTypes.FETCH_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        totalScore: action.payload.totalScore,
      };

    case actionTypes.INCREMENT_SCORE:
      return {
        ...state,
        totalScore: state.totalScore + 1,
      };

    default:
      return state;
  }
};
export default appViewReducer;
