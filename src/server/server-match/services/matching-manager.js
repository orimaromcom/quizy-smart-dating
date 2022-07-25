const { Answer } = require('../../db/models');
const Sequelize = require('sequelize');

class MatchingManager {
  async getAllAnswers() {
    return await Answer.findAll({
      order: [
        ['id', 'ASC'],
      ],
    });
  }
}

module.exports = MatchingManager;
