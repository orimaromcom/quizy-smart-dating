'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: "Adam",
        password: "1234",
        age: 30,
        location: "Tel Aviv",
        radius: 5,
        gender: "male",
        lookingForGender: "female",
        lookingForRelationsType: "friends",
        lookingForMinAge: 20,
        lookingForMaxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Adi",
        password: "1234",
        age: 29,
        location: "Tel Aviv",
        radius: 10,
        gender: "female",
        lookingForGender: "male",
        lookingForRelationsType: "romantic",
        lookingForMinAge: 25,
        lookingForMaxAge: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Abba",
        password: "1234",
        age: 28,
        location: "Tel Aviv",
        radius: 1,
        gender: "male",
        lookingForGender: "any",
        lookingForRelationsType: "friends",
        lookingForMinAge: 25,
        lookingForMaxAge: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Abiram",
        password: "1234",
        age: 30,
        location: "Tel Aviv",
        radius: 5,
        gender: "male",
        lookingForGender: "female",
        lookingForRelationsType: "romantic",
        lookingForMinAge: 20,
        lookingForMaxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('TriviaAnswers', [
      {
        userId: "12",
        FilmCorrectAnswers: 5,
        FilmQuestionsAnswered: 11,
        SportsCorrectAnswers: 5,
        SportsQuestionsAnswered: 9,
        ComputersCorrectAnswers: 0,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 5,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 20,
        HistoryQuestionsAnswered: 20,
        MusicCorrectAnswers: 1,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "13",
        FilmCorrectAnswers: 8,
        FilmQuestionsAnswered: 12,
        SportsCorrectAnswers: 8,
        SportsQuestionsAnswered: 9,
        ComputersCorrectAnswers: 4,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 0,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 10,
        HistoryQuestionsAnswered: 20,
        MusicCorrectAnswers: 2,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "14",
        FilmCorrectAnswers: 3,
        FilmQuestionsAnswered: 10,
        SportsCorrectAnswers: 6,
        SportsQuestionsAnswered: 9,
        ComputersCorrectAnswers: 2,
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
        userId: "15",
        FilmCorrectAnswers: 7,
        FilmQuestionsAnswered: 10,
        SportsCorrectAnswers: 8,
        SportsQuestionsAnswered: 8,
        ComputersCorrectAnswers: 3,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 9,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 1,
        HistoryQuestionsAnswered: 4,
        MusicCorrectAnswers: 2,
        MusicQuestionsAnswered: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: "16",
        FilmCorrectAnswers: 8,
        FilmQuestionsAnswered: 10,
        SportsCorrectAnswers: 7,
        SportsQuestionsAnswered: 8,
        ComputersCorrectAnswers: 2,
        ComputersQuestionsAnswered: 4,
        CelebritiesCorrectAnswers: 9,
        CelebritiesQuestionsAnswered: 9,
        HistoryCorrectAnswers: 0,
        HistoryQuestionsAnswered: 5,
        MusicCorrectAnswers: 2,
        MusicQuestionsAnswered: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    await queryInterface.bulkInsert('PersonalAnswers', [
      {
        "userId": "12",
        "questionId": "17",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "13",
        "questionId": "17",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "14",
        "questionId": "17",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "15",
        "questionId": "17",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "16",
        "questionId": "17",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "12",
        "questionId": "18",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "13",
        "questionId": "18",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "14",
        "questionId": "18",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "15",
        "questionId": "18",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "16",
        "questionId": "18",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "12",
        "questionId": "19",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "13",
        "questionId": "19",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "14",
        "questionId": "19",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "15",
        "questionId": "19",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "16",
        "questionId": "19",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
    await queryInterface.bulkDelete('TriviaAnswers', null, {});
    await queryInterface.bulkDelete('PersonalAnswers', null, {});
  }
};
