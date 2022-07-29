import axios from "axios";

export default class QuestionsApiService {
  static async getQuestions() {
    const response = await axios.get(`/quiz/questions`);
    const questions = response.data;
    return questions;
  }
}
