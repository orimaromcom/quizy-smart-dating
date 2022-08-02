import axios from "axios";
import { headers } from "./headers";

export default class DistancesApiService {
    static async postDistances(userId) {
      const response = await axios.post(`/matching/postdistances/${userId}`, {
        headers: headers,
        body: JSON.stringify({ userId: userId }),
      });
      return response.data;
    }
  }
