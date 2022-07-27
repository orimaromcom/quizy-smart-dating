const matchingManager = require("../services/matching-manager");

async function getAllPersonalAnswers(req, res) {
  let personalAnswers = await matchingManager.getAllPersonalAnswers();
  if (!personalAnswers) personalAnswers = [];
  res.status(200).json(personalAnswers);
}

async function getUserPersonalAnswers(req, res) {
  let userId = Number.parseInt(req.params.id);
  ErrorIfNaN(userId);
  const userPersonalAnswers = await matchingManager.getUserPersonalAnswers(userId);
  ErrorIfNotFound(userPersonalAnswers);
  res.status(200).json(userPersonalAnswers);
}

async function getAllTriviaAnswers(req, res) {
  let triviaAnswers = await matchingManager.getAllTriviaAnswers();
  if (!triviaAnswers) triviaAnswers = [];
  res.status(200).json(triviaAnswers);
}

async function getUserTriviaAnswers(req, res) {
  let userId = Number.parseInt(req.params.id);
  ErrorIfNaN(userId);
  const userTriviaAnswers = await matchingManager.getUserTriviaAnswers(userId);
  ErrorIfNotFound(userTriviaAnswers)
  res.status(200).json(userTriviaAnswers);
}

async function getAllDistances(req, res) {
  let distances = await matchingManager.getAllDistances();
  if (!distances) distances = [];
  res.status(200).json(distances);
}

async function getUserDistances(req, res) {
  let userId = Number.parseInt(req.params.id);
  ErrorIfNaN(userId);
  const userDistances = await matchingManager.getUserDistances(userId);
  ErrorIfNotFound(userDistances);
  res.status(200).json(userDistances);
}

async function postUserDistances(req, res) {
  let userId = Number.parseInt(req.params.id);
  ErrorIfNaN(userId);
  const userDistances = await matchingManager.postUserDistances(userId);
  ErrorIfNotFound(userDistances);
  res.status(200).json(userDistances);
}

async function postAllUsersDistances(req, res) {
  const userDistances = await matchingManager.postAllUsersDistances();
  ErrorIfNotFound(userDistances);
  res.status(200).json(userDistances);
}

function ErrorIfNaN(id) {
  if (isNaN(id)) {
    const error = Error()
    error.statusCode = 400;
    error.message = 'Id should be a number';
    throw error;
  }
}

function ErrorIfNotFound(item) {
  if (!item) {
    const error = Error()
    error.statusCode = 404;
    error.message = 'Not found';
    throw error;
  }
}

module.exports = {
  getAllPersonalAnswers,
  getUserPersonalAnswers,
  getAllTriviaAnswers,
  getUserTriviaAnswers,
  getAllDistances,
  getUserDistances,
  postUserDistances,
  postAllUsersDistances
};
