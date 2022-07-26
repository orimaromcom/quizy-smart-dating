const { default: axios } = require("axios");

const URL_EXAMPLE =
  "https://opentdb.com/api.php?amount=10&category=26&difficulty=easy";
//const url = "https://opentdb.com";
const FILM_CATEGORY_NUMBER = "11";
const SPORTS_CATEGORY_NUMBER = "21";
const COMPUTERS_CATEGORY_NUMBER = "18";
const CELEBRITIES_CATEGORY_NUMBER = "26";
const HISTORY_CATEGORY_NUMBER = "23";
const MUSIC_CATEGORY_NUMBER = "12";

async function fetchQuestions() {
  const errorResponse = {
    error: true,
    description: `Error fetching questions`,
  };
  try {
    const response = await axios.get(URL_EXAMPLE).then((response) => response);
    const questions = response.data.results;

    return {
      error: false,
      questions: questions,
    };
  } catch (error) {
    return errorResponse;
  }
}

module.exports = {
  fetchQuestions,
};
