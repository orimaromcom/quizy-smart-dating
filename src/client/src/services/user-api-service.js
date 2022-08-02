import axios from "axios";
import { headers } from "./headers";

export default class UserApiService {
  static async updateUser(userData) {
    try {
      await axios.post(`/user`, {
        headers: headers,
        body: JSON.stringify(userData),
      });
      return await this.getUserByEmail(userData.email);
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }

  static async getUserByEmail(email) {
    try {
      const response = await axios.get(`/user/${email}`,{
        headers: headers,
      });
      return response.data;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }

  static async setTriviaStatistics(id){
    try {
      const response = await axios.post(`/user/set-trivia/${id}`,{
        headers: headers,
      });
      return response.data;
    }
    catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }
}
