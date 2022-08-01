import axios from "axios";
export default class AchievemntsApiService {
  static async getAchievements(id) {
    try {
      const response = await axios.get(`/matching/achievements/${id}`);
      const achievements = await response.data;
      return achievements;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }
}
