import axios from "axios";

export default class QuestionsApiService {
  static async getQuestions() {
    const response = await axios.get(`/quiz/questions`);
    if (response.status === 200) {
      return response.data;
    }

    throw new Error(response?.data?.msg)
  }
}
