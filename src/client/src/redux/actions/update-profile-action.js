import actionTypes from "./constants";
import UserApiService from "../../services/user-api-service";

const updatehProfileRequest = () => ({
  type: actionTypes.UPDATE_PROFILE_REQUEST,
});

const updateProfileSuccess = (Profile) => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  payload: Profile,
});

const updateProfileFailure = () => ({
  type: actionTypes.UPDATE_PROFILE_FAILURE,
});

export const updateProfileAction = (data) => {
  return async (dispatch) => {
    dispatch(updatehProfileRequest());
    try {
      const Profile = await UserApiService.updateUser(data);
      dispatch(updateProfileSuccess(Profile));
    } catch (e) {
      dispatch(updateProfileFailure());
    }
  };
};
