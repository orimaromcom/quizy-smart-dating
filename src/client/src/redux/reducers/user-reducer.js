import actionTypes from "../actions/constants";

const initialState = {
  id: null,
  email: null,
  userName: null,
  picture: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        id: action.id,
        email: action.email,
        userName: action.userName,
        picture: action.picture
      };
    case actionTypes.RESET_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default userReducer;
