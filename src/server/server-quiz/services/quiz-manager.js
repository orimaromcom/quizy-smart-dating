const urlArray = require("../clients/api-constants");
const { Question } = require("../../db/models");
const triviaClient = require("../clients/trivia-client");

async function getAllQuestions() {
  const personalQuestions = await Question.findAll();

  const triviaQuestions = await triviaClient.fetchMultipleTopics(urlArray);
  console.log(triviaQuestions);

  const quizyTriviaQuestions = changeQuestionsStructure(triviaQuestions);

  const questions = [...personalQuestions, ...quizyTriviaQuestions];
  shuffleOptions(questions);
  return questions;
}

function changeQuestionsStructure(triviaQuestions) {
  const newQuestionsArray = [];
  for (let question of triviaQuestions) {
    const newQuestion = {
      id: null,
      question: question.question,
      type: "trivia",
      topic: `${question.category}`,
      amountOfOptions: `${question.type}`,
    };

    const options = question.incorrect_answers;
    options.push(question.correct_answer);
    shuffleOptions(options);

    if (question.type === "multiple") {
      newQuestion.option1 = options[0];
      newQuestion.option2 = options[1];
      newQuestion.option3 = options[2];
      newQuestion.option4 = options[3];
    }

    if (question.type === "boolean") {
      newQuestion.option1 = options[0];
      newQuestion.option2 = options[1];
      delete newQuestion.option3;
      delete newQuestion.option4;
    }

    newQuestion.correctOption = question.correct_answer;
    newQuestionsArray.push(newQuestion);
  }
  return newQuestionsArray;
}

function shuffleOptions(optionsArray) {
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
