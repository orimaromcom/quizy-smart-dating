import { createSelector } from "reselect";

const getAchievements = (state) => state.achievements;

export const getAllAchievements = createSelector(
  getAchievements,
  (achievements) => {
    return achievements;
  }
);
