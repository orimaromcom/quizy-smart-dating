export default class QuestionsApiService {
  static async getQuestions() {
    const response = await fetch("/questions");
    const questions = await response.json();

    return questions;
  }
}
