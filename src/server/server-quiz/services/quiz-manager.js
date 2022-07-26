const urlArray = require("../clients/api-constants");
const { Question, TriviaAnswer } = require("../../db/models");
const triviaClient = require("../clients/trivia-client");

async function getAllQuestions() {
  const personalQuestions = await Question.findAll();

  const triviaQuestions = await triviaClient.fetchMultipleTopics(urlArray);

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

    newQuestion.option1 = options[0];
    newQuestion.option2 = options[1];

    if (options.length > 2) {
      newQuestion.option3 = options[2];
      newQuestion.option4 = options[3];
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

async function postAnswer(requestBodyFromClient) {
  if (requestBodyFromClient.type === "trivia") {
    postTriviaAnswer(requestBodyFromClient);
  }

  return requestBodyFromClient;
}

async function postTriviaAnswer(requestBodyFromClient) {
  const topicQuestionsAnswered = requestBodyFromClient.topic + "QuestionsAnswered";
  const topicCorrectAnswers = requestBodyFromClient.topic + "CorrectAnswers";
  const userId = requestBodyFromClient.userId;

  await TriviaAnswer.increment(topicQuestionsAnswered, {
    by: 1,
    where: { userId: userId },
  });
  if (requestBodyFromClient.isCorrect) {
    await TriviaAnswer.increment(topicCorrectAnswers, {
      by: 1,
      where: { userId: userId },
    });
  }
}

module.exports = {
  getAllQuestions,
  postAnswer,
};
