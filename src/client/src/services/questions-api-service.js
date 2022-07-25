export default class QuestionsApiService {
  static async getQuestions() {
    const response = await fetch(`/quiz/questions`);
    const questions = await response.json();
    return questions;
  }
}
