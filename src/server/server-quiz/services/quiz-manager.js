const { Question } = require("../../db/models");
const triviaClient = require("../clients/trivia-client");

async function getAllQuestions() {
  const personalQuestions = await Question.findAll();

  const triviaQuestionsResponse = await triviaClient.fetchQuestions();
  const quizyTriviaQuestions = changeQuestionsStructure(
    triviaQuestionsResponse.questions
  );

  const questions = { ...personalQuestions, ...quizyTriviaQuestions };
  return questions;
}

function changeQuestionsStructure(triviaQuestions) {
  const newQuestionsArray = []
  for (let question of triviaQuestions) {
    const newQuestion = {"id" : null, "type" : "trivia", "topic" : `${question.category}`, "amountOfOptions" : `${question.type}`}
    
    const options = question.incorrect_answers
    options.push(question.correct_answer)
    shuffleOptions(options)
    console.log(options)
   
    newQuestionsArray.push(newQuestion)
  }
}

function shuffleOptions (optionsArray){
  for (var i = optionsArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = optionsArray[i];
    optionsArray[i] = optionsArray[j];
    optionsArray[j] = temp;
}


}

module.exports = {
  getAllQuestions,
};
