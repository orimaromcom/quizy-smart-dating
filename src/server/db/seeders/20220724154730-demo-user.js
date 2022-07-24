'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        username: "Tal",
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
        username: "Ori",
        password: "1234",
        age: 28,
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
        username: "Anna",
        password: "1234",
        age: 28,
        location: "Tel Aviv",
        radius: 1,
        gender: "female",
        lookingForGender: "male",
        relations: "friends",
        minAge: 25,
        maxAge: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', {[Op.or]: [{username: 'Tal'}, {username: 'Ori'},  {username: 'Anna'}]});
  }
};
