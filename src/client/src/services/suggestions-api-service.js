import axios from "axios";
import { headers } from "./headers";

export default class SuggestionsApiService {
  static async getSuggestions(userId) {
    const response = await axios.get(`/matching/suggestions/${userId}`,{
      headers: headers,
    });
    if (response.status === 200) {
      return response.data;
    }

    throw new Error(response?.data?.msg);
  }
}
