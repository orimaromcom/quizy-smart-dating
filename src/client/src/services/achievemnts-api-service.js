import axios from "axios";
import { headers } from "./headers";

export default class AchievemntsApiService {
  static async getAchievements(id) {
    try {
      const response = await axios.get(`/matching/achievements/${id}`, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
