import axios from "axios";
import { headers } from "./headers";

export default class DistancesApiService {
    static async postDistances(userId) {
      const response = await axios.post(`/matching/postdistances/${userId}`, {
        userId: userId
      }, {
        headers: headers,
      });
      return response.data;
    }
  }
