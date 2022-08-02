import axios from "axios";
import { headers } from "./headers";

export default class BrainmatesApiService {
  static async getBrainmates(id) {
    try {
      const response = await axios.get(`/brainmates/${id}`,{
        headers: headers
      });
      const brainmates = await response.data;
      return brainmates;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }
}
