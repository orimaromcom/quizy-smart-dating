'use strict';

const faker = require('faker');

const AMOUNT_OF_USERS = 200;

// const PHOTOS = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKi-dTKsqe-aBxkOJnNmIGZYcXM0zQDKQOKZmqjDfINherAww6IGqvB8k44XwNhYTSus&usqp=CAU", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Icons8_flat_manager.svg/1024px-Icons8_flat_manager.svg.png", "https://w7.pngwing.com/pngs/463/1000/png-transparent-computer-icons-agriculture-farmer-crop-farmer-icon-hat-smiley-sticker.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVki-W_uujCaTvpNM11TDow7Quak0v3sC-4HKViNS4pdPnqUdydTBFn0TQunXiPzQOUM&usqp=CAU","https://icons-for-free.com/iconfiles/png/512/businesswoman-131964752427078920.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQ084FxUq-oiPAKnTDEEkdE4hTg7-VW4zACod2SL2M7suV96W5T6aVxaYTE2NZXmeEho&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrKD9OguJb-KNJ5_64lPgd-FMP20dXQ5N89wQkTxza4Ti2X2ckRZbQGAAdzLL7_07n9Y&usqp=CAU"]
// const amountOfPhotos = PHOTOS.length;
const PHOTOS = {
  "male": ['https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png', 'https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg', 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDJ8MHx8&w=1000&q=80', 'https://www.sony.dk/alphauniverse/assets/resized/2020/11/Julien-Mauve-profile_square_291x291.jpg'],
  "female": ['https://elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg', 'https://millionairedating.onluxy.com/wp-content/uploads/2018/12/woman-smilling-in-red-top-and-red-lipstick-square-e1544061815643.jpg', 'https://viterbischool.usc.edu/wp-content/uploads/2020/05/Lily-Profile-Square.jpeg', 'https://www.silverstripe.org/assets/Uploads/Sacha-Judd-profile-square.jpg'],
  "other": ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Meet_Taylor_Mason_%28Asia_Kate_Dillon%29_Billions_Season_2.jpg/800px-Meet_Taylor_Mason_%28Asia_Kate_Dillon%29_Billions_Season_2.jpg', 'https://n1s2.starhit.ru/f2/66/42/f2664214765ede9f49f9328594314d28/480x497_0_d352f6e52a5b07ff7a62e12e01eafe17@480x497_0xac120003_297955491598255128.jpg'],
}
const CITIES = ["Bat Yam", "Givatayim", "Haifa", "Herzliya", "Holon", "Nes Ziona", "Netanya", "Petah Tikva", "Raanana", "Ramat-Gan", "Ramla", "Rehovot", "Rishon Lezion", "Tel Aviv", "Yavne"];
const amountOfCities = CITIES.length;
const GENDERS = ["male", "female", "male", "female", "male", "female", "other"];
const amountOfGenders = GENDERS.length;
// const LOOK_FOR_GENDER = ["female", "male", "any"];
const RELATIONS = ["romantic", "friends"];
const amountOfRalations = RELATIONS.length;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const usersJSON = [];
    for(let i = 0; i < AMOUNT_OF_USERS; i++){
      const username = `${faker.name.firstName()}${randomInt(1, 100)}`;
      const gender = GENDERS[randomInt(0, amountOfGenders)];
      usersJSON.push({
        username: username,
        email: `${username}@gmail.com`,
        phoneNumber: faker.phone.phoneNumber('+972-5#-###-##-##'),
        photo: PHOTOS[gender][randomInt(0, PHOTOS[gender].length)],
        age: randomInt(20, 40),
        location: CITIES[randomInt(0, amountOfCities)],
        gender: gender,
        lookingForGender: "any",
        lookingForRelationsType: RELATIONS[randomInt(0, amountOfRalations)],
        lookingForMinAge: randomInt(18, 22),
        lookingForMaxAge: randomInt(38, 45),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await queryInterface.bulkInsert('Users', usersJSON, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
