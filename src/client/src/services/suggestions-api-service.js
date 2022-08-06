import axios from "axios";
import { headers } from "./headers";

export default class SuggestionsApiService {
  static async getSuggestions(userId) {
    try {
      const response = await axios.get(`/api/matching/suggestions/${userId}`,{
        headers: headers,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
