const { Question } = require("../../db/models");

async function getQuestions() {
  const questions = await Question.findAll();

  return questions;
}

module.exports = {
  getQuestions,
};
