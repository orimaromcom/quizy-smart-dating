'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Likes', {
      fields: ['firstUserId', 'secondUserId'],
      type: 'unique',
      name: 'UserIdLikeToUserId'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Likes', 'UserIdLikeToUserId')
  }
};
