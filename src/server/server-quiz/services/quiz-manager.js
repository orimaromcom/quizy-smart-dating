const iquotes = require("iquotes");
const urlArray = require("../clients/api-constants");
const { PersonalQuestion, TriviaAnswer, PersonalAnswer } = require("../../db/models");
const triviaClient = require("../clients/trivia-client");

async function getAllQuestions() {
  const personalQuestions = await PersonalQuestion.findAll();
  shuffleOptions(personalQuestions);
  const slicedArray = personalQuestions.slice(0, 4);

  const triviaQuestions = await triviaClient.fetchMultipleTopics(urlArray);

  const quizyTriviaQuestions = changeQuestionsStructure(triviaQuestions);

  const questions = [...slicedArray, ...quizyTriviaQuestions];

  shuffleOptions(questions);
  return questions;
}

async function getRandomQuote() {
  const quote = iquotes.random("love");
  return quote;
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
  for (let i = optionsArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = optionsArray[i];
    optionsArray[i] = optionsArray[j];
    optionsArray[j] = temp;
  }
}

async function postAnswer(answersArray) {
  for (const answer of answersArray) {
    if (answer.type === "trivia") {
      postTriviaAnswer(answer);
    } else {
      postPersonalAnswer(answer);
    }
  }
  return answersArray;
}

async function postTriviaAnswer(answer) {
  if (answer.topic === "Entertainment: Music") {
    answer.topic = "Music";
  }
  if (answer.topic === "Entertainment: Film") {
    answer.topic = "Film";
  }
  if (answer.topic === "Science: Computers") {
    answer.topic = "Computers";
  }
  if (answer.topic === "Science: Math") {
    answer.topic = "Math";
  }

  const topicQuestionsAnswered = answer.topic + "QuestionsAnswered";
  const topicCorrectAnswers = answer.topic + "CorrectAnswers";
  const userId = answer.userId;

  await TriviaAnswer.increment(topicQuestionsAnswered, {
    by: 1,
    where: { userId: userId },
  });
  if (answer.isCorrect) {
    await TriviaAnswer.increment(topicCorrectAnswers, {
      by: 1,
      where: { userId: userId },
    });
  }
}

async function postPersonalAnswer(requestBodyFromClient) {
  const userId = requestBodyFromClient.userId;
  const questionId = requestBodyFromClient.questionId;
  const chosenOption = requestBodyFromClient.chosenOption;
  await PersonalAnswer.upsert({
    userId: userId,
    questionId: questionId,
    chosenOption: chosenOption,
  });
}

module.exports = {
  getAllQuestions,
  postAnswer,
  getRandomQuote,
};
