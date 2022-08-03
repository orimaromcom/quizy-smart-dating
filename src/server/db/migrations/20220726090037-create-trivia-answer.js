'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TriviaAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        unique: true
      },
      FilmCorrectAnswers: {
        type: Sequelize.INTEGER
      },
      FilmQuestionsAnswered: {
        type: Sequelize.INTEGER
      },
      SportsCorrectAnswers: {
        type: Sequelize.INTEGER
      },
      SportsQuestionsAnswered: {
        type: Sequelize.INTEGER
      },
      ComputersCorrectAnswers: {
        type: Sequelize.INTEGER
      },
      ComputersQuestionsAnswered: {
        type: Sequelize.INTEGER
      },
      CelebritiesCorrectAnswers: {
        type: Sequelize.INTEGER
      },
      CelebritiesQuestionsAnswered: {
        type: Sequelize.INTEGER
      },
      HistoryCorrectAnswers: {
        type: Sequelize.INTEGER
      },
      HistoryQuestionsAnswered: {
        type: Sequelize.INTEGER
      },
      MusicCorrectAnswers: {
        type: Sequelize.INTEGER
      },
      MusicQuestionsAnswered: {
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
    await queryInterface.dropTable('TriviaAnswers');
  }
};
