import actionTypes from "./constants";

const resetProfileRequest = () => ({
  type: actionTypes.RESET_PROFILE_REQUEST,
});

const resetProfileSuccess = (Profile) => ({
  type: actionTypes.RESET_PROFILE_SUCCESS,
  payload: Profile,
});

const resetProfileFailure = () => ({
  type: actionTypes.RESET_PROFILE_FAILURE,
});

export const resetProfileAction = (data) => {
  return async (dispatch) => {
    dispatch(resetProfileRequest());
    try {
      dispatch(resetProfileSuccess(data));
    } catch (e) {
      dispatch(resetProfileFailure());
    }
  };
};
