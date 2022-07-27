'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.renameColumn('Likes', 'userId', 'firstUserId');
     await queryInterface.renameColumn('Likes', 'likesUserId', 'secondUserId');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Likes', 'firstUserId', 'userId');
    await queryInterface.renameColumn('Likes', 'secondUserId', 'likesUserId');
  }
};
