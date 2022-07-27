'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Distances', {
      fields: ['userId', 'matchToUserId'],
      type: 'unique',
      name: 'userIdmatchToUserId'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Distances', 'userIdmatchToUserId')
  }
};
