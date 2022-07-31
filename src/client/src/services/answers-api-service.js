export default class AnswersApiService {
  static async postAnswers(answersArray) {
    try {
      const response = await fetch(`/quiz/answers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answersArray: answersArray }),
      });
      return response.data;
    } catch (error) {
      console.log("Error:", error.message);
      // throw new Error(error.message);
    }
  }
}
