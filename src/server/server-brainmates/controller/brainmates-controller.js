const matchingManager = require("../services/brainmates-manager");

async function getAllAnswers(req, res) {
  let answers = await matchingManager.getAllAnswers();
  if (!answers) answers = [];
  res.status(200).json(answers);
}

module.exports = {
  getAllAnswers
};
