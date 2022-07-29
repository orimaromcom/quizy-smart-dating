const getAchievementsEntities = (state) => state.achievements;

export const getAllAchievements = (state) =>
  getAchievementsEntities(state).answers;
