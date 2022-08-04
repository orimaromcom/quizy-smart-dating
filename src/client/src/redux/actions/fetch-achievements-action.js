import actionTypes from "./constants";
import AchievementsApiService from "../../services/achievemnts-api-service";

const fetchAchievementsRequest = (loadingMessage) => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_REQUEST,
  payload: loadingMessage,
});

const fetchAchievementsSuccess = (achievements) => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_SUCCESS,
  payload: achievements,
});

const fetchAchievementsFailure = (errorMessage) => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_FAILURE,
  payload: errorMessage,
});

export const fetchAchievementsAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchAchievementsRequest("Loading Your Achievemnt..."));
    try {
      const achievements = await AchievementsApiService.getAchievements(id);
      dispatch(fetchAchievementsSuccess(achievements.categories));
    } catch (e) {
      dispatch(fetchAchievementsFailure(e.message));
    }
  };
};
