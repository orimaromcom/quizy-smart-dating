import axios from "axios";
import { headers } from "./headers";

export default class QuoteApiService {
  static async getRandomQuote() {
    try {
      const response = await axios.get(`/api/quiz/quote`, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
