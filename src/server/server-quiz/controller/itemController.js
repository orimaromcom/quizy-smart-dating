const itemManagerService = require("../services/itemManagerService");

async function getQuestions(req, res) {
  let questions = await itemManagerService.getQuestions();

  if (!questions) questions = [];
  res.status(200).json(questions);
}

module.exports = {
  getQuestions,
};
