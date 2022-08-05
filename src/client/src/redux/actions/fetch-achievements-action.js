import actionTypes from "./constants";
import AchievementsApiService from "../../services/achievemnts-api-service";

const fetchAchievementsRequest = (loadingMessage) => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_REQUEST,
  payload: loadingMessage,
});

const fetchAchievementsSuccess = (achievements, totalScore) => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_SUCCESS,
  payload: { achievements, totalScore },
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
      const totalScore = Object.keys(achievements.categories)
        .map((achievement) => achievements.categories[achievement].correct)
        .reduce((sum, num) => sum + num, 0);
      dispatch(fetchAchievementsSuccess(achievements.categories, totalScore));
    } catch (e) {
      dispatch(fetchAchievementsFailure(e.message));
    }
  };
};
