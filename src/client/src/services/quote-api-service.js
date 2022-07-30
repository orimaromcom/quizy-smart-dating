import axios from "axios";

export default class QuoteApiService {
  static async getRandomQuote() {
    const response = await axios.get(`/quiz/quote`);
    const quote = response.data;
    return quote;
  }
}
