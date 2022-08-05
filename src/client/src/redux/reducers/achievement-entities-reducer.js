import actionTypes from "../actions/constants";

const initialState = {
  achievements: {},
};

const achievementsEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ACHIEVEMENTS_SUCCESS: {
      return { ...state, achievements: action.payload.achievements };
    }

    default:
      return state;
  }
};

export default achievementsEntitiesReducer;
