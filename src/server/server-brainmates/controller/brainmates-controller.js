const matchingManager = require("../services/brainmates-manager");


// it is not done, just a mock

async function getAllAnswers(req, res) {
  let answers = await matchingManager.getAllAnswers();
  if (!answers) answers = [];
  res.status(200).json(answers);
}

module.exports = {
  getAllAnswers
};
