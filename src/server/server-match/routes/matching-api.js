const MatchingManager = require("../services/matching-manager.js");

const matchingManager = new MatchingManager();

async function getAllAnswers(req, res) {
  let answers = await matchingManager.getAllAnswers();
  if (!answers) answers = [];
  res.status(200).json(answers);
}

module.exports = {
  getAllAnswers
};
