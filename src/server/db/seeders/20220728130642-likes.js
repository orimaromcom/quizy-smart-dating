'use strict';
const { User } = require('../models');
const { isBasicMatchPossible } = require('../../server-matching/services/matching-manager')

module.exports = {
  async up (queryInterface, Sequelize) {
    const likesJSON = [];
    const allUsers = await User.findAll();
    allUsers.forEach(firstUser => {
      allUsers.forEach(secondUser => {
        if (firstUser.id !== secondUser.id && (firstUser.id + secondUser.id) % 3 === 0) { // for every 3rd user
          if (isBasicMatchPossible(firstUser, secondUser)) {
            likesJSON.push({
              firstUserId: firstUser.id,
              secondUserId: secondUser.id,
              firstUserLikesSecondUser: Math.random() > 0.5,
              createdAt: new Date(),
              updatedAt: new Date()
            })
          }
        }
      });
    });


    await queryInterface.bulkInsert('Likes', likesJSON, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};
