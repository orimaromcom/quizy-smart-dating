'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        username: "Mor",
        password: "1234",
        age: 30,
        location: "Tel Aviv",
        radius: 5,
        gender: "female",
        lookingForGender: "male",
        relations: "friends",
        minAge: 20,
        maxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Tom",
        password: "1234",
        age: 29,
        location: "Tel Aviv",
        radius: 10,
        gender: "male",
        lookingForGender: "female",
        relations: "romantic",
        minAge: 25,
        maxAge: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Roy",
        password: "1234",
        age: 28,
        location: "Tel Aviv",
        radius: 1,
        gender: "female",
        lookingForGender: "any",
        relations: "friends",
        minAge: 25,
        maxAge: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Lana",
        password: "1234",
        age: 30,
        location: "Tel Aviv",
        radius: 5,
        gender: "female",
        lookingForGender: "male",
        relations: "romantic",
        minAge: 20,
        maxAge: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Bar",
        password: "1234",
        age: 29,
        location: "Tel Aviv",
        radius: 10,
        gender: "male",
        lookingForGender: "female",
        relations: "romantic",
        minAge: 20,
        maxAge: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Neta",
        password: "1234",
        age: 28,
        location: "Tel Aviv",
        radius: 1,
        gender: "female",
        lookingForGender: "any",
        relations: "friends",
        minAge: 20,
        maxAge: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
