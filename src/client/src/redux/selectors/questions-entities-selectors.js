import { createSelector } from "reselect";

const getQuestionsEntities = (state) => state.questions;

// const getQuestions = (state) => Object.values(getQuestionsEntities(state));

export const getAllQuestions = createSelector(
  getQuestionsEntities,
  (questions) => {
    console.log(questions);
    return questions;
  }
);
