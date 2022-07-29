const getQuestionsEntities = (state) => state.questionsEntities;

export const getAllQuestions = (state) => getQuestionsEntities(state).questions;
export const getQuote = (state) => getQuestionsEntities(state).quote;
export const getQuestionsLoading = (state) => getQuestionsEntities(state).questionsLoading
export const getQuestionIndex = (state) => getQuestionsEntities(state).questionIndex;


