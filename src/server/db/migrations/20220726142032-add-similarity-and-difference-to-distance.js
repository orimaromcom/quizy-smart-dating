'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Distances',
      'triviaDifference',
      Sequelize.FLOAT
    );
    await queryInterface.addColumn(
      'Distances',
      'personalSimilarity',
      Sequelize.INTEGER
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Distances',
      'triviaDifference',
    );
    await queryInterface.removeColumn(
      'Distances',
      'personalSimilarity',
    );
  }
};
