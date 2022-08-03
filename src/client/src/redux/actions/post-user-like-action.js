import actionTypes from "./constants";
import BrainmatesApiService from "../../services/brainmates-api-service";

const postUserLikeRequest = () => ({
  type: actionTypes.POST_USER_LIKE_REQUEST,
});

const postUserLikeSuccess = () => ({
  type: actionTypes.POST_USER_LIKE_SUCCESS,
});

const postUserLikeFailure = (error) => ({
  type: actionTypes.POST_USER_LIKE_FAILURE,
  payload: error?.message ?? error,
});

export const postUserLikeAction = (
  currentUserId,
  suggestedUserId,
  currentUserDecision
) => {
  return async (dispatch) => {
    dispatch(postUserLikeRequest());
    try {
      const postUserLikeBody = {
        firstUserId: currentUserId,
        secondUserId: suggestedUserId,
        firstUserLikesSecondUser: currentUserDecision,
      };
console.log(postUserLikeBody)
      await BrainmatesApiService.postUserLike(postUserLikeBody);

      dispatch(postUserLikeSuccess());
    } catch (e) {
      dispatch(postUserLikeFailure(e));
    }
  };
};
