import axios from "axios";
import { headers } from "./headers";

export default class QuoteApiService {
  static async getRandomQuote() {
    try {
      const response = await axios.get(`/quiz/quote`, {
        headers: headers,
      });
      const quote = response.data;
      return quote;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }

  }
}
