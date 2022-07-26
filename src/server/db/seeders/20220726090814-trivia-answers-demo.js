'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TriviaAnswers', [
      {
        userId: "1",
        FilmCorrectAnswers: 5,
        FilmQuestionsAnswered: 10,
        SportsCorrectAnswers: 6,
        SportsQuestionsAnswered: 8,
        ComputersCorrectAnswers: 0,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 5,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 5,
        HistoryQuestionsAnswered: 20,
        MusicCorrectAnswers: 1,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "2",
        FilmCorrectAnswers: 7,
        FilmQuestionsAnswered: 12,
        SportsCorrectAnswers: 8,
        SportsQuestionsAnswered: 8,
        ComputersCorrectAnswers: 4,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 0,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 1,
        HistoryQuestionsAnswered: 20,
        MusicCorrectAnswers: 2,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "3",
        FilmCorrectAnswers: 7,
        FilmQuestionsAnswered: 10,
        SportsCorrectAnswers: 6,
        SportsQuestionsAnswered: 8,
        ComputersCorrectAnswers: 0,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 9,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 4,
        HistoryQuestionsAnswered: 4,
        MusicCorrectAnswers: 0,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "4",
        FilmCorrectAnswers: 7,
        FilmQuestionsAnswered: 10,
        SportsCorrectAnswers: 8,
        SportsQuestionsAnswered: 8,
        ComputersCorrectAnswers: 0,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 9,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 0,
        HistoryQuestionsAnswered: 4,
        MusicCorrectAnswers: 2,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "5",
        FilmCorrectAnswers: 8,
        FilmQuestionsAnswered: 10,
        SportsCorrectAnswers: 7,
        SportsQuestionsAnswered: 8,
        ComputersCorrectAnswers: 0,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 9,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 0,
        HistoryQuestionsAnswered: 4,
        MusicCorrectAnswers: 1,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TriviaAnswers', null, {});
  }
};
