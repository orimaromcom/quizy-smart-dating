import axios from "axios";

export default class UserApiService {
  static async getUser(id) {
    const response = await axios.get(`/users/${id}`);
    console.log(response);
    const user = response.data;
    return user;
  }

  static async updateUser(data) {
    const response = await fetch(`/users/${data.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const user = await response.json();

    return user;
  }
}
