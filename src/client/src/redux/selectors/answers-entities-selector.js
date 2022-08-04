import { createSelector } from "reselect";

const getAnswersEntities = (state) => state.answersEntities;

export const getAllAnswers = (state) => getAnswersEntities(state).answers;
export const getAnswerIndex = (state) => getAnswersEntities(state).answerIndex;

// export const getCorrectAnswers = createSelector(getAllAnswers, (answers) => {
//   if (!answers) return 0;
//   return answers.filter((answer) => answer.isCorrect).length;
// });
