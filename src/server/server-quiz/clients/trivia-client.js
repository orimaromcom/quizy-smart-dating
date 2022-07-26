const { default: axios } = require("axios");

const URL_EXAMPLE =
  "https://opentdb.com/api.php?amount=10&category=26&difficulty=easy";
//const url = "https://opentdb.com";
const FILM_CATEGORY_NUMBER = 11;

async function fetchQuestions() {
  const errorResponse = {
    error: true,

    description: `Error fetching questions`,
  };
  try {
    const response = await axios.get(URL_EXAMPLE).then((response) => response);
    const questions = response.data;

    if (questions) {
      return {
        error: false,
        questions: questions,
        description: `Pokemon with ID ${pokemonId} data`,
      };
    }
  } catch (error) {
    return errorResponse;
  }
}

module.exports = {
  fetchQuestions,
};
