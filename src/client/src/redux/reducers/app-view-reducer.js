import actionTypes from "../actions/constants";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "error",
  pageButtonValue: "login",
  isSuccess: false,
  successMessage: "Sucsses!",
};

const appViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HIDE_TOASTER:
      return { ...state, isError: false, isSuccess: false };

    case actionTypes.FETCH_QUESTIONS_REQUEST:
    case actionTypes.FETCH_ACHIEVEMENTS_REQUEST:
    case actionTypes.FETCH_BRAINMATES_REQUEST:
    case actionTypes.FETCH_PROFILE_REQUEST:
    case actionTypes.UPDATE_PROFILE_REQUEST:
    case actionTypes.POST_DISTANCES_REQUEST: {
      return { ...state, isLoading: true };
    }

    case actionTypes.UPDATE_PROFILE_SUCCESS:
    case actionTypes.FETCH_PROFILE_SUCCESS:
    case actionTypes.FETCH_BRAINMATES_SUCCESS:
    case actionTypes.FETCH_ACHIEVEMENTS_SUCCESS:
    case actionTypes.FETCH_QUESTIONS_SUCCESS:
    case actionTypes.POST_DISTANCES_SUCCESS: {
      return { ...state, isError: false, isLoading: false };
    }

    case actionTypes.UPDATE_PROFILE_FAILURE:
    case actionTypes.FETCH_PROFILE_FAILURE:
    case actionTypes.FETCH_BRAINMATES_FAILURE:
    case actionTypes.FETCH_ACHIEVEMENTS_FAILURE:
    case actionTypes.POST_DISTANCES_FAILURE:
    case actionTypes.FETCH_QUESTIONS_FAILURE: {
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
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

    default:
      return state;
  }
};
export default appViewReducer;
