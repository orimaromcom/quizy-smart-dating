import axios from "axios";

export default class QuestionsApiService {
  static async getQuestions() {
    try {
      const response = await axios.get(`/quiz/questions`);
      const questions = response.data;
      return questions;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
