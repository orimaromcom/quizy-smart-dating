import actionTypes from "./constants";
import UserApiService from "../../services/user-api-service";

const fetchProfileRequestAction = () => ({
  type: actionTypes.FETCH_PROFILE_REQUEST,
});

const fetchProfileSuccessAction = (Profile) => ({
  type: actionTypes.FETCH_PROFILE_SUCCESS,
  payload: Profile,
});

const fetchProfileFailureAction = () => ({
  type: actionTypes.FETCH_PROFILE_FAILURE,
});

export const fetcProfile = (id) => {
  return async (dispatch) => {
    dispatch(fetchProfileRequestAction());
    try {
      const Profile = await UserApiService.getUser(id);
      dispatch(fetchProfileSuccessAction(Profile));
    } catch (e) {
      dispatch(fetchProfileFailureAction());
    }
  };
};
