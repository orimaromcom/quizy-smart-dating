'use strict';

const faker = require('faker');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        username: "shansy93",
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        age: 28,
        location: "Tel Aviv",
        radius: 5,
        gender: "female",
        lookingForGender: "any",
        lookingForRelationsType: "friends",
        lookingForMinAge: 20,
        lookingForMaxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ori.marom10",
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        age: 33,
        location: "Tel Aviv",
        radius: 100,
        gender: "female",
        lookingForGender: "male",
        lookingForRelationsType: "romantic",
        lookingForMinAge: 18,
        lookingForMaxAge: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "talivneh8",
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        age: 30,
        location: "Tel Aviv",
        radius: 10,
        gender: "female",
        lookingForGender: "any",
        lookingForRelationsType: "friends",
        lookingForMinAge: 20,
        lookingForMaxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
