import axios from "axios";
import { headers } from "./headers";

export default class DistancesApiService {
  static async postDistances(userId) {
    try {
      const response = await axios.post(`/matching/postdistances/${userId}`, {
        userId: userId
      }, {
        headers: headers,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      // throw new Error(error.message);
    }
  }
}
