//***delete when server is ready***
import user from "../temp/mock-user";

export default class UserApiService {
  static async getUser(id) {
    //***uncomment when server is ready***
    // const response = await fetch(`/users/${id}`);
    // const user = await response.json();
    // return user;

    //***delete when server is ready***
    return user;
  }

  static async updateUser(id, data) {
    console.log("update", data);
    //***uncomment when server is ready***
    // const response = await fetch(`/users/${id}`);
    // const user = await response.json();
    // return user;

    //***delete when server is ready***
    return user;
  }
}
