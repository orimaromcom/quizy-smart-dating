import actionTypes from "./constants";

const userLogout = () => ({
  type: actionTypes.USER_LOGOUT,
});

export const userLogoutAction = () => {
  return async (dispatch) => {
    dispatch(userLogout());
  };
};
