import axios from "axios";

export default class UserApiService {
  static async updateUser(userData) {
    try {
      await fetch(`/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      return await this.getUserByEmail(userData.email);
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }

  static async getUserByEmail(email){
    try {
      const response = await axios.get(`/user/${email}`);
      return response.data;
    }
    catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }

  static async setTriviaStatistics(id){
    try {
      const response = await axios.post(`/user/set-trivia/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }
}
