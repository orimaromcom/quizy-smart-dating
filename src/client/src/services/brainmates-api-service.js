import axios from "axios";
export default class BrainmatesApiService {
  static async getBrainmates(id) {
    const response = await axios.get(`/brainmates/${id}`);
    const brainmates = await response.data;
    return brainmates;
  }
}
