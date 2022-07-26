const quizManager = require("../services/quiz-manager");

async function getAllQuestions(req, res) {
  let questions = await quizManager.getAllQuestions();

  if (!questions) questions = [];
  res.status(200).json(questions);
}

async function postAnswer(req, res) {
  const answer = await quizManager.postAnswer(req.body);
  res.status(200).json(answer);
}

module.exports = {
  getAllQuestions,
  postAnswer,
};
