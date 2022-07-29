const quizManager = require("../services/quiz-manager");

async function getAllQuestions(req, res) {
  let questions = await quizManager.getAllQuestions();

  if (!questions) questions = [];
  res.status(200).json(questions);
}

async function getRandomQuote(req, res) {
  let quote = await quizManager.getRandomQuote();
  if (!quote) quote = [];
  res.status(200).json(quote);

}

async function postAnswer(req, res) {
  const answersArray = req.body.answersArray;

  const answerFromServer = await quizManager.postAnswer(answersArray);
  res.status(200).json(answerFromServer);
}

module.exports = {
  getAllQuestions,
  postAnswer,
  getRandomQuote,
};
