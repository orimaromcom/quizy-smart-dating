import axios from "axios";
import { headers } from "./headers";

export default class QuestionsApiService {
  static async getQuestions() {
    try {
      const response = await axios.get(`/quiz/questions`, {
        headers: headers
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
