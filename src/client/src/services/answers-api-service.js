export default class AnswersApiService {
  static async postAnswers(answersArray) {
    const response = await fetch(`/quiz/answers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answersArray: answersArray }),
    });
    const json = await response.json();

    return json;
  }
}
