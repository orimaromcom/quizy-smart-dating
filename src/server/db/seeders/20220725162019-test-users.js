'use strict';

const faker = require('faker');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        username: "shansy93",
        email: "shansy93@gmail.com",
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        photo: "https://ca.slack-edge.com/T03DN6MRQ75-U03EFPZKYQ5-1f63933bc198-512",
        age: 28,
        location: "Tel Aviv",
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
        email: "ori.marom10@gmail.com",
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        photo: "https://ca.slack-edge.com/T03DN6MRQ75-U03EC2GAWDC-a4dab0e1f7f7-512",
        age: 33,
        location: "Tel Aviv",
        gender: "male",
        lookingForGender: "female",
        lookingForRelationsType: "romantic",
        lookingForMinAge: 18,
        lookingForMaxAge: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "talivneh8",
        email: "talivneh8@gmail.com",
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        photo: "https://ca.slack-edge.com/T03DN6MRQ75-U03E43TT615-4d1e2447cf2c-512",
        age: 30,
        location: "Tel Aviv",
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
