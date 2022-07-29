'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstUserId: {
        type: Sequelize.INTEGER
      },
      secondUserId: {
        type: Sequelize.INTEGER
      },
      firstUserLikesSecondUser: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Likes', {
      fields: ['firstUserId', 'secondUserId'],
      type: 'unique',
      name: 'UserIdLikeToUserId'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Likes');
  }
};
