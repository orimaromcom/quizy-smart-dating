//***delete when server is ready***
import mockQuestions from "../temp/mock-questions.json";

export default class QuestionsApiService {
  //***uncomment when server is ready***
  // static async getQuestions() {
  // const response = await fetch(`/questions`);
  // const questions = await response.json();
  // return questions;
  // }

  //***delete when server is ready***
  static getQuestions() {
    return mockQuestions.questions;
  }
}
