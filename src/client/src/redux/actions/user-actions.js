import actionTypes from "./constants";

const setUser = (id, email, userName, picture) => ({
  type: actionTypes.SET_USER,
  id: id,
  email: email,
  userName: userName,
  picture: picture
});

const resetUser = () => ({
  type: actionTypes.SET_USER,
  id: null,
  email: null,
  userName: null,
  picture: null
});

export const setUserAction = (userInfo) => {
  const {id, email, userName, picture} = userInfo;
  return async (dispatch) => {
    dispatch(setUser(id, email, userName, picture));
  };
};

export const resetUserAction = () => {
  return async (dispatch) => {
    dispatch(resetUser());
  };
};
