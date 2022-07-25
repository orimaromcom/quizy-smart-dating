const quizManager = require("../services/quizManager");

async function getQuestions(req, res) {
  let questions = await quizManager.getQuestions();

  if (!questions) questions = [];
  res.status(200).json(questions);
}

module.exports = {
  getQuestions,
};
