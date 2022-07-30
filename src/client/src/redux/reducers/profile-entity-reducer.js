import actionTypes from "../actions/constants";

const initialState = {
  profile: {},
};

const brainmatesEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_SUCCESS:
    case actionTypes.UPDATE_PROFILE_SUCCESS: {
      return { ...state, profile: action.payload };
    }

    default:
      return state;
  }
};

export default brainmatesEntitiesReducer;
