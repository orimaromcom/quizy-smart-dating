const getQuestionsEntities = (state) => state.questionsEntities;

export const getAllQuestions = (state) => getQuestionsEntities(state).questions;
export const getQuestionIndex = (state) => getQuestionsEntities(state).questionIndex;
