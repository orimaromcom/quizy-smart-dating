import actionTypes from "./constants";
import BrainmatesApiService from "../../services/brainmates-api-service";

const fetchBrainmatesRequest = () => ({
  type: actionTypes.FETCH_BRAINMATES_REQUEST,
});

export const fetchBrainmatesSuccess = (brainmates) => ({
  type: actionTypes.FETCH_BRAINMATES_SUCCESS,
  payload: brainmates,
});

const fetchBrainmatesFailure = (errorMessage) => ({
  type: actionTypes.FETCH_BRAINMATES_FAILURE,
  payload: errorMessage,
});

export const fetchBrainmatesAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchBrainmatesRequest());
    try {
      const Brainmates = await BrainmatesApiService.getBrainmates(id);
      dispatch(fetchBrainmatesSuccess(Brainmates));
    } catch (e) {
      dispatch(fetchBrainmatesFailure(e.message));
    }
  };
};
