import actionTypes from "./constants";
import UserApiService from "../../services/user-api-service";

const fetchProfileRequest = () => ({
  type: actionTypes.FETCH_PROFILE_REQUEST,
});

const fetchProfileSuccess = (Profile) => ({
  type: actionTypes.FETCH_PROFILE_SUCCESS,
  payload: Profile,
});

const fetchProfileFailure = () => ({
  type: actionTypes.FETCH_PROFILE_FAILURE,
});

export const fetchProfileAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchProfileRequest());
    try {
      const Profile = await UserApiService.getUserById(id);
      dispatch(fetchProfileSuccess(Profile));
    } catch (e) {
      dispatch(fetchProfileFailure());
    }
  };
};
