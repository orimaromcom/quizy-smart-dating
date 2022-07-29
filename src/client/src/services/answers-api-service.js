const URL = "http://localhost:8080";
export default class AnswersApiService {
  static async postAnswers(answersArray) {
    const response = await fetch(`${URL}/quiz/answers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answersArray: answersArray }),
    });
    const json = await response.json();

    return json;
  }
}
