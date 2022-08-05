const getAnswersEntities = (state) => state.answersEntities;

export const getAllAnswers = (state) => getAnswersEntities(state).answers;
export const getAnswerIndex = (state) => getAnswersEntities(state).answerIndex;
