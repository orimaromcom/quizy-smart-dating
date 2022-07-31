// import { user } from "../temp/mock-user";
import axios from "axios";

export default class UserApiService {
  static async getUser(email) {
    const response = await axios.get(`/user/${email}`);
    const user = response.data;
    return user;
  }

  static async updateUser(userData) {
    const response = await fetch(`/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const user = await response.json();
    return user;
  }

  static async getUserByEmail(email){
    try {
      const response = await axios.get(`/user/${email}`);
      return response.data;
    }
    catch (error) {
      // throw new Error(error.message);
      console.log(error.message);
    }
  }
}
