import actionTypes from "./constants";
import AchievementsApiService from "../../services/achievemnts-api-service";

const fetchAchievementsRequest = () => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_REQUEST,
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
    dispatch(fetchAchievementsRequest());
    try {
      const achievements = await AchievementsApiService.getAchievements(id);
      dispatch(fetchAchievementsSuccess(achievements.categories));
    } catch (e) {
      dispatch(fetchAchievementsFailure(e.message));
    }
  };
};
