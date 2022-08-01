import axios from "axios";

export default class QuestionsApiService {
  static async getQuestions() {
    try {
      const response = await axios.get(`/quiz/questions`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
    // LOOOOOOK

    throw new Error(response?.data?.msg);
  }
}
