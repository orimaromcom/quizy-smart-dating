import axios from "axios";
export default class AchievemntsApiService {
  static async getAchievements(id) {
    try {
      const response = await axios.get(`/matching/trivia-answers/${id}`);
      const achievements = await response.data;
      return achievements;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
