export default class AchievemntsApiService {
  static async getAchievemnts(id) {
    const response = await fetch(`/matching/trivia-answers/${id}`);
    const questions = await response.json();

    return questions;
  }
}
