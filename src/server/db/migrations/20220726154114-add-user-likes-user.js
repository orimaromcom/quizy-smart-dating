'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Likes',
      'firstUserLikesSecondUser',
      Sequelize.BOOLEAN
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Likes',
      'firstUserLikesSecondUser',
    );
  }
};
