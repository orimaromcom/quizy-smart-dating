import actionTypes from "../../actions/constants";
import quizLogicEntitiesReducer from "../quiz-logic-entities-reducer";

test('quizLogicEntitiesReducer should return the initial state', () => {
  expect(quizLogicEntitiesReducer(undefined, { type: undefined })).toEqual(
    {
      quizOngoing: false,
    }
  )
})

test('quizLogicEntitiesReducer should set that quiz ongoing', () => {
  const previousState = { quizOngoing: false };
  expect(quizLogicEntitiesReducer(previousState, { type: actionTypes.QUIZ_ONGOING })).toEqual(
    { quizOngoing: true }
  )
})

test('quizLogicEntitiesReducer should set that quiz finished', () => {
  const previousState = { quizOngoing: true };
  expect(quizLogicEntitiesReducer(previousState, { type: actionTypes.QUIZ_FINISHED })).toEqual(
    { quizOngoing: false }
  )
})
