'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Answers',
      'question',
      Sequelize.STRING
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Answers',
      'question',
    );
  }
};
