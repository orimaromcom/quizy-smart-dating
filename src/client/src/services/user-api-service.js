import axios from "axios";
import { headers } from "./headers";

export default class UserApiService {
  static async updateUser(userData) {
    try {
      await axios.post(`/user`, {
        ...userData,
      }, {
        headers: headers,
      });
      return await this.getUserByEmail(userData.email);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getUserByEmail(email) {
    try {
      const response = await axios.get(`/user/${email}`, {
        headers: headers
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async setTriviaStatistics(id){
    try {
      const response = await axios.post(`/user/set-trivia/${id}`, {}, {
        headers: headers
      });
      return response.data;
    }
    catch (error) {
      throw new Error(error.message);
    }
  }


}
