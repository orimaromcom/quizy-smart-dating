import actionTypes from "./constants";
import BrainmatesApiService from "../../services/brainmates-api-service";

const fetchBrainmatesRequest = (loadingMessage) => ({
  type: actionTypes.FETCH_BRAINMATES_REQUEST,
  payload: loadingMessage,
});

const fetchBrainmatesSuccess = (brainmates) => ({
  type: actionTypes.FETCH_BRAINMATES_SUCCESS,
  payload: brainmates,
});

const fetchBrainmatesFailure = (errorMessage) => ({
  type: actionTypes.FETCH_BRAINMATES_FAILURE,
  payload: errorMessage,
});

export const fetchBrainmatesAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchBrainmatesRequest("Loading Brainmates..."));
    try {
      const Brainmates = await BrainmatesApiService.getBrainmates(id);
      dispatch(fetchBrainmatesSuccess(Brainmates));
    } catch (e) {
      dispatch(fetchBrainmatesFailure(e.message));
    }
  };
};
