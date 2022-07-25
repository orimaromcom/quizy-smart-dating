import { createSelector } from "reselect";

const getQuestionsEntities = (state) => state.questionsEntities;

const getQuestions = (state) => Object.values(getQuestionsEntities(state));

export const getAllQuestions = createSelector(getQuestions, (questions) => {
  return questions;
});
