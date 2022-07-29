'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Distances', {
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
      triviaDifference: {
        type: Sequelize.FLOAT
      },
      personalSimilarity: {
        type: Sequelize.INTEGER
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
    await queryInterface.addConstraint('Distances', {
      fields: ['firstUserId', 'secondUserId'],
      type: 'unique',
      name: 'userIdmatchToUserId'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Distances');
  }
};
