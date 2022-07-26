const { Answer } = require('../../db/models');
const Sequelize = require('sequelize');

// it is not done, just a mock

async function getAllAnswers() {
  return await Answer.findAll();
}

module.exports = {
  getAllAnswers,
};
