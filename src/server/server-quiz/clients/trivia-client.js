const { default: axios } = require("axios");

async function fetchQuestions(url) {
  const errorResponse = {
    error: true,
    description: `Error fetching questions`,
  };
  try {
    const response = await axios.get(url)
    const questions = response.data.results;

    return {
      error: false,
      questions: questions,
    };
  } catch (error) {
    return errorResponse;
  }
}

async function fetchMultipleTopics(urlArray) {
  let allQuestions = [];

  for (let url of urlArray.urlArray) {
    let topicQuestions = await fetchQuestions(url);

    allQuestions = [...allQuestions, ...topicQuestions.questions];
  }

  return allQuestions;
}

module.exports = {
  fetchQuestions,
  fetchMultipleTopics,
};
