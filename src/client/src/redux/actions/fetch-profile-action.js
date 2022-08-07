import actionTypes from "./constants";
import UserApiService from "../../services/user-api-service";

const fetchProfileRequest = () => ({
  type: actionTypes.FETCH_PROFILE_REQUEST,
});

export const fetchProfileSuccess = (Profile) => ({
  type: actionTypes.FETCH_PROFILE_SUCCESS,
  payload: Profile,
});

const fetchProfileFailure = (errorMessage) => ({
  type: actionTypes.FETCH_PROFILE_FAILURE,
  payload: errorMessage,
});

export const fetchProfileAction = (email) => {
  return async (dispatch) => {
    dispatch(fetchProfileRequest());
    try {
      const Profile = await UserApiService.getUserByEmail(email);
      dispatch(fetchProfileSuccess(Profile));
    } catch (e) {
      dispatch(fetchProfileFailure(e.message));
    }
  };
};
