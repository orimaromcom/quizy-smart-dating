//***delete when server is ready***
import { user } from "../temp/mock-user";

import axios from "axios";

export default class UserApiService {
  static async getUser(id) {
    //***uncomment when server is ready***
    // const response = await fetch(`/users/${id}`);
    // const user = await response.json();
    // return user;

    //***delete when server is ready***
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
