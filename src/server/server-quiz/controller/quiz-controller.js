const quizManager = require("../services/quiz-manager");

async function getAllQuestions(req, res) {
  let questions = await quizManager.getAllQuestions();

  if (!questions) questions = [];
  res.status(200).json(questions);
}

module.exports = {
  getAllQuestions,
};
