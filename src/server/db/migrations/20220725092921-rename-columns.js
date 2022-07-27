'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.renameColumn('Users', 'relations', 'lookingForRelationsType');
     await queryInterface.renameColumn('Users', 'minAge', 'lookingForMinAge');
     await queryInterface.renameColumn('Users', 'maxAge', 'lookingForMaxAge');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'lookingForRelationsType', 'relations');
    await queryInterface.renameColumn('Users', 'lookingForMinAge', 'minAge');
    await queryInterface.renameColumn('Users', 'lookingForMaxAge', 'maxAge');
  }
};
