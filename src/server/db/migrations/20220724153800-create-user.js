'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      photo: {
        type: Sequelize.STRING,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.STRING,
        unique: true
      },
      age: {
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      radius: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      lookingForGender: {
        type: Sequelize.STRING
      },
      lookingForRelationsType: {
        type: Sequelize.STRING
      },
      lookingForMinAge: {
        type: Sequelize.INTEGER
      },
      lookingForMaxAge: {
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
