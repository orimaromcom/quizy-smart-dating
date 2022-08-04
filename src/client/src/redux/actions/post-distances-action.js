import actionTypes from "./constants";
import DistancesApiService from "../../services/distances-api-service";

const postDistancesRequest = () => ({
  type: actionTypes.POST_DISTANCES_REQUEST,
});

const postDistancesSuccess = () => ({
  type: actionTypes.POST_DISTANCES_SUCCESS,
});

const postDistancesFailure = (error) => ({
  type: actionTypes.POST_DISTANCES_FAILURE,
  payload: error?.message ?? error,
});

export const postDistancesAction = (userId) => {
  return async (dispatch) => {
    dispatch(postDistancesRequest());
    try {
     await DistancesApiService.postDistances(userId);

      dispatch(postDistancesSuccess());
    } catch (e) {
      dispatch(postDistancesFailure(e));
    }
  };
};
