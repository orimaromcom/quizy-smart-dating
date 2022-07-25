'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        "userId": "4",
        "questionId": "29",
        "chosenOption": "C++",
        "correctOption": "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "4",
        "questionId": "32",
        "chosenOption": "40",
        "correctOption": "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "4",
        "questionId": "17",
        "chosenOption": "Yes!",
        "correctOption": null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "5",
        "questionId": "29",
        "chosenOption": "JavaScript",
        "correctOption": "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "5",
        "questionId": "32",
        "chosenOption": "40",
        "correctOption": "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": "5",
        "questionId": "111",
        "chosenOption": "Yes!",
        "correctOption": null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
