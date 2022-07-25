const express = require("express");

const { getQuestions } = require("../controller/itemController");

const itemRouter = express.Router();

itemRouter.get("/", getQuestions);

module.exports = itemRouter;
