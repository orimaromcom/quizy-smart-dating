const { Answer } = require('../../db/models');
const Sequelize = require('sequelize');

async function getAllAnswers() {
  return await Answer.findAll();
}

module.exports = {
  getAllAnswers,
};
