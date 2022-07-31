import axios from "axios";

export default class UserApiService {
  static async getUserById(email) {
    try {
      const response = await axios.get(`/user/${email}`);
      const user = response.data;
      return user;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }

  static async updateUser(userData) {
    try {
      const response = await fetch(`/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const user = await response.json();
      return user;
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
}
