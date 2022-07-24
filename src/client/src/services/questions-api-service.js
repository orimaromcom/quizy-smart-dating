//***delete when server is ready***
import mockQuestions from "../temp/mock-questions.json";

export default class QuestionsApiService {
  //***uncomment when server is ready***
  // static async getQuestion(id) {
  // const response = await fetch(`/questions/${id}`);
  // const questions = await response.json();
  // return questions;
  // }

  //***delete when server is ready***
  static getQuestion(id) {
    return mockQuestions.questions.find((quest) => quest.id === id);
  }
}
