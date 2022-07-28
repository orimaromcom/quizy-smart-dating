'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        username: "Mor",
        phoneNumber: "+1-234-5678",
        password: "1234",
        age: 30,
        location: "Tel Aviv",
        radius: 5,
        gender: "female",
        lookingForGender: "male",
        lookingForRelationsType: "friends",
        lookingForMinAge: 20,
        lookingForMaxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Tom",
        phoneNumber: "+1-234-5678",
        password: "1234",
        age: 29,
        location: "Tel Aviv",
        radius: 10,
        gender: "male",
        lookingForGender: "female",
        lookingForRelationsType: "romantic",
        lookingForMinAge: 25,
        lookingForMaxAge: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Roy",
        phoneNumber: "+1-234-5678",
        password: "1234",
        age: 28,
        location: "Tel Aviv",
        radius: 1,
        gender: "female",
        lookingForGender: "any",
        lookingForRelationsType: "friends",
        lookingForMinAge: 25,
        lookingForMaxAge: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Lana",
        phoneNumber: "+1-234-5678",
        password: "1234",
        age: 30,
        location: "Tel Aviv",
        radius: 5,
        gender: "female",
        lookingForGender: "male",
        lookingForRelationsType: "romantic",
        lookingForMinAge: 20,
        lookingForMaxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Bar",
        phoneNumber: "+1-234-5678",
        password: "1234",
        age: 29,
        location: "Tel Aviv",
        radius: 10,
        gender: "male",
        lookingForGender: "female",
        lookingForRelationsType: "romantic",
        lookingForMinAge: 20,
        lookingForMaxAge: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Neta",
        phoneNumber: "+1-234-5678",
        password: "1234",
        age: 28,
        location: "Tel Aviv",
        radius: 1,
        gender: "female",
        lookingForGender: "any",
        lookingForRelationsType: "friends",
        lookingForMinAge: 20,
        lookingForMaxAge: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
