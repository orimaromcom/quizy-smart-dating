import axios from "axios";
export default class AchievemntsApiService {
  static async getAchievements(id) {
    const response = await axios.get(`/matching/achievements/${id}`);
    const achievements = await response.data;
    return achievements;
  }
}
