import actionTypes from "../actions/constants";

const initialState = {
  profile: {
    id: null,
    email: null,
    userName: null,
    age: null,
    phone: null,
    location: null,
    picture: null,
    gender: null,
    preferences: {
      relation_type: null,
      gender: null,
      minAge: null,
      maxAge: null,
    },
  },
};

const profileEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_SUCCESS: {
      return { ...state, profile: action.payload };
    }
    case actionTypes.UPDATE_PROFILE_SUCCESS: {
      return { ...state, profile: action.payload.Profile };
    }
    default:
      return state;
  }
};

export default profileEntitiesReducer;
