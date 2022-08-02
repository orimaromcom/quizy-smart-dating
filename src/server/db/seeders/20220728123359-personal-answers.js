'use strict';
const { PersonalQuestion, User } = require('../models');

const OPTIONS = ["option1", "option2", "option3", "option4"]

module.exports = {
  async up (queryInterface, Sequelize) {

    const personalAnswersJSON = [];
    const allUsers = await User.findAll();
    const allQuestions = await PersonalQuestion.findAll();
    allUsers.forEach(user => {
      allQuestions.forEach(question => {
        let chosenOption;
        if (question.amountOfOptions === "multiple") {
          chosenOption = OPTIONS[Math.floor(Math.random() * 4)];
        } else {
          chosenOption = OPTIONS[Math.floor(Math.random() * 2)];
        }
        personalAnswersJSON.push({
          userId: user.id,
          questionId: question.id,
          chosenOption: question[chosenOption],
          createdAt: new Date(),
          updatedAt: new Date()
        })
      });
    });
    await queryInterface.bulkInsert('PersonalAnswers', personalAnswersJSON, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PersonalAnswers', null, {});
  }
};
