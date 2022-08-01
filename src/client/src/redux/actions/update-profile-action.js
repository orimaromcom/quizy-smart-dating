import actionTypes from "./constants";
import UserApiService from "../../services/user-api-service";

const updatehProfileRequestAction = () => ({
  type: actionTypes.UPDATE_PROFILE_REQUEST,
});

const updateProfileSuccessAction = (Profile) => ({
  type: actionTypes.UPDATE_PROFILE_SUCCESS,
  payload: Profile,
});

const updateProfileFailureAction = () => ({
  type: actionTypes.UPDATE_PROFILE_FAILURE,
});

export const updateProfile = (data) => {
  return async (dispatch) => {
    dispatch(updatehProfileRequestAction());
    try {
      const Profile = await UserApiService.updateUser(data);
      console.log(Profile);
      dispatch(updateProfileSuccessAction(Profile));
    } catch (e) {
      dispatch(updateProfileFailureAction());
    }
  };
};
