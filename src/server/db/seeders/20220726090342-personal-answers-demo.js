'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PersonalAnswers', [
      {
        "userId": "1",
        "questionId": "17",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "2",
        "questionId": "17",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "3",
        "questionId": "17",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "4",
        "questionId": "17",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "5",
        "questionId": "17",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "1",
        "questionId": "18",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "2",
        "questionId": "18",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "3",
        "questionId": "18",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "4",
        "questionId": "18",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "5",
        "questionId": "18",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "1",
        "questionId": "19",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "2",
        "questionId": "19",
        "chosenOption": "Yes!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "3",
        "questionId": "19",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "4",
        "questionId": "19",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "5",
        "questionId": "19",
        "chosenOption": "No",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PersonalAnswers', null, {});
  }
};
