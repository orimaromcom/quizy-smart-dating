'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        question: "Matt Damon played an astronaut stranded on an extraterrestrial planet in both of the movies Interstellar and The Martian.",
        type: "trivia",
        topic: "Entertainment: Film",
        amountOfOptions: "boolean",
        option1: "False",
        option2: "True",
        correctOption: "True",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "The United States was a member of the League of Nations.",
        type: "trivia",
        topic: "History",
        amountOfOptions: "boolean",
        option1: "False",
        option2: "True",
        correctOption: "False",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What is the name of the main character in &quot;The Flash&quot; TV series?",
        type: "trivia",
        topic: "Entertainment: Television",
        amountOfOptions: "multiple",
        option1: "Barry Allen",
        option2: "Oliver Queen",
        option3: "Bart Allen",
        option4: "Bruce Wayne",
        correctOption: "Barry Allen",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Which Teenage Mutant Ninja Turtle traditionally wears an orange bandana?",
        type: "trivia",
        topic: "Entertainment: Animations",
        amountOfOptions: "multiple",
        option1: "Raphael",
        option2: "Donatello",
        option3: "Leonardo",
        option4: "Michelangelo",
        correctOption: "Michelangelo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
        type: "trivia",
        topic: "Sports",
        amountOfOptions: "multiple",
        option1: "1-5",
        option2: "1-6",
        option3: "1-7",
        option4: "2-6",
        correctOption: "1-7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Which German field marshal was known as the `Desert Fox`?",
        type: "trivia",
        topic: "History",
        amountOfOptions: "multiple",
        option1: "Wilhelm List",
        option2: "Wolfram Freiherr von Richthofen",
        option3: "Ernst Busch",
        option4: "Erwin Rommel",
        correctOption: "Erwin Rommel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What language does Node.js use?",
        type: "trivia",
        topic: "Science: Computers",
        amountOfOptions: "multiple",
        option1: "C++",
        option2: "JavaScript",
        option3: "Java",
        option4: "Python",
        correctOption: "JavaScript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
        type: "trivia",
        topic: "Science: Computers",
        amountOfOptions: "multiple",
        option1: "Microsoft",
        option2: "Commodore",
        option3: "Atari",
        option4: "Apple",
        correctOption: "Apple",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "HTML is what type of language?",
        type: "trivia",
        topic: "Science: Computers",
        amountOfOptions: "multiple",
        option1: "Scripting Language",
        option2: "Programming Language",
        option3: "Markup Language",
        option4: "Macro Language",
        correctOption: "Markup Language",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "In Roman Numerals, what does XL equate to?",
        type: "trivia",
        topic: "Science: Mathematics",
        amountOfOptions: "multiple",
        option1: "40",
        option2: "90",
        option3: "15",
        option4: "60",
        correctOption: "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Who was the King of Gods in Ancient Greek mythology?",
        type: "trivia",
        topic: "Mythology",
        amountOfOptions: "multiple",
        option1: "Poseidon",
        option2: "Zeus",
        option3: "Hermes",
        option4: "Apollo",
        correctOption: "Zeus",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Questions', null, {});
  }
};
