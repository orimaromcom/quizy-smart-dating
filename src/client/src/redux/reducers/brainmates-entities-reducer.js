import actionTypes from "../actions/constants";

const initialState = {
  brainmates: {},
};

const brainmatesEntitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BRAINMATES_SUCCESS: {
      return { ...state, brainmates: action.payload };
    }

    default:
      return state;
  }
};

export default brainmatesEntitiesReducer;
