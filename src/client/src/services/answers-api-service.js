import axios from "axios";
import { headers } from "./headers";

export default class AnswersApiService {
  static async postAnswers(answersArray) {
    try {
      const response = await axios.post(`/quiz/answers`, {
        answersArray: answersArray ,
      }, {
        headers: headers,
      });
      return response;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }
}
