'use strict';
const { User } = require('../models');

function randomCorrectAnswers() {
  const min = 0;
  const max = 20;
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomQuestionsAnswered() {
  const min = 20;
  const max = 25;
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    const triviaAnswersJSON = [];
    const allUsers = await User.findAll();
    allUsers.forEach(user => {
      triviaAnswersJSON.push({
        userId: user.id,
        FilmCorrectAnswers: randomCorrectAnswers(),
        FilmQuestionsAnswered: randomQuestionsAnswered(),
        SportsCorrectAnswers: randomCorrectAnswers(),
        SportsQuestionsAnswered: randomQuestionsAnswered(),
        ComputersCorrectAnswers: randomCorrectAnswers(),
        ComputersQuestionsAnswered: randomQuestionsAnswered(),
        CelebritiesCorrectAnswers: randomCorrectAnswers(),
        CelebritiesQuestionsAnswered: randomQuestionsAnswered(),
        HistoryCorrectAnswers: randomCorrectAnswers(),
        HistoryQuestionsAnswered: randomQuestionsAnswered(),
        MusicCorrectAnswers: randomCorrectAnswers(),
        MusicQuestionsAnswered: randomQuestionsAnswered(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });
    await queryInterface.bulkInsert('TriviaAnswers', triviaAnswersJSON, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TriviaAnswers', null, {});
  }
};
