
const URL = "http://localhost:8080";
export default class QuestionsApiService {
  static async getQuestions() {
    const response = await fetch(`${URL}/quiz/questions`);
    const questions = await response.json();
    
    return questions;
  }
}
