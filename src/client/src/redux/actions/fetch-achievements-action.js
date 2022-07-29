import actionTypes from "./constants";
import AchievementsApiService from "../../services/achievemnts-api-service";

const fetchAchievementsRequestAction = () => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_REQUEST,
});

const fetchAchievementsSuccessAction = (achievements) => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_SUCCESS,
  payload: achievements,
});

const fetchAchievementsFailureAction = () => ({
  type: actionTypes.FETCH_ACHIEVEMENTS_FAILURE,
});

export const fetcAchievements = (id) => {
  return async (dispatch) => {
    dispatch(fetchAchievementsRequestAction());
    try {
      const achievements = await AchievementsApiService.getAchievements(id);
      dispatch(fetchAchievementsSuccessAction(achievements));
    } catch (e) {
      dispatch(fetchAchievementsFailureAction());
    }
  };
};
