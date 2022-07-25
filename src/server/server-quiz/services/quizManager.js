const { Question } = require("../../db/models");

async function getAllQuestions() {
  const questions = await Question.findAll();

  return questions;
}

module.exports = {
  getAllQuestions,
};
