import axios from "axios";
export default class BrainmatesApiService {
  static async getBrainmates(id) {
    try {
      const response = await axios.get(`/brainmates/${id}`);
      const brainmates = await response.data;
      return brainmates;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }
}
