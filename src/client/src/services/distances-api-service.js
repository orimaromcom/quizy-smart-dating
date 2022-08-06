import axios from "axios";
import { headers } from "./headers";

export default class DistancesApiService {
  static async postDistances(userId) {
    try {
      const response = await axios.post(`/api/matching/postdistances/${userId}`, {
        userId: userId
      }, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
