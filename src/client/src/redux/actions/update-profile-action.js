import actionTypes from "./constants";
import UserApiService from "../../services/user-api-service";

const updatehProfileRequest = () => ({
  type: actionTypes.UPDATE_PROFILE_REQUEST,
});

export const updateProfileSuccess = (Profile, SuccessMessage) => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  payload: { Profile, SuccessMessage },
});

const updateProfileFailure = (errorMessage) => ({
  type: actionTypes.UPDATE_PROFILE_FAILURE,
  payload: errorMessage,
});

export const updateProfileAction = (data) => {
  return async (dispatch) => {
    dispatch(updatehProfileRequest());
    try {
      const Profile = await UserApiService.updateUser(data);
      dispatch(updateProfileSuccess(Profile, "Saving details"));
    } catch (e) {
      dispatch(updateProfileFailure(e.message));
    }
  };
};
