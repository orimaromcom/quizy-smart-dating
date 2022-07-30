import actionTypes from "./constants";
import BrainmatesApiService from "../../services/brainmates-api-service";

const fetchBrainmatesRequestAction = () => ({
  type: actionTypes.FETCH_BRAINMATES_REQUEST,
});

const fetchBrainmatesSuccessAction = (brainmates) => ({
  type: actionTypes.FETCH_BRAINMATES_SUCCESS,
  payload: brainmates,
});

const fetchBrainmatesFailureAction = () => ({
  type: actionTypes.FETCH_BRAINMATES_FAILURE,
});

export const fetcBrainmates = (id) => {
  return async (dispatch) => {
    dispatch(fetchBrainmatesRequestAction());
    try {
      const Brainmates = await BrainmatesApiService.getBrainmates(id);
      dispatch(fetchBrainmatesSuccessAction(Brainmates));
    } catch (e) {
      dispatch(fetchBrainmatesFailureAction());
    }
  };
};
