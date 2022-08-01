import axios from "axios";

export default class QuoteApiService {
  static async getRandomQuote() {
    try {
      const response = await axios.get(`/quiz/quote`);
      const quote = response.data;
      return quote;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }

  }
}
