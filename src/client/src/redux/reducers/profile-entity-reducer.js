import actionTypes from "../actions/constants";

const initialState = {
  profile: {
    id: null,
    email: null,
    userName: null,
    phone: null,
    location: null,
    picture: null,
    gender: null,
    preferences: {
      gender: null,
      minAge: null,
      maxAge: null,
      distance: null,
    },
  },
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
