const URL = "http://localhost:8080";
export default class AchievemntsApiService {
  static async getAchievements(id) {
    const response = await fetch(`${URL}/matching/trivia-answers/${id}`);
    const achievements = await response.json();

    return achievements;
  }
}
