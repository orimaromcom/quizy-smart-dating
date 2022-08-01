import axios from "axios";

export default class SuggestionsApiService {
  static async getSuggestions(userId) {
    const response = await axios.get(`/matching/suggestions/${userId}`);
    if (response.status === 200) {
      return response.data;
    }

    throw new Error(response?.data?.msg);
  }
}
