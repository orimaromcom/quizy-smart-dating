import answersEntitiesReducer from "../answers-entities-reducer";
import { addAnswer } from "../../actions/add-answer-action";
import { incrementAnswersIndex } from "../../actions/increment-answers-index-action";
import { clearAnswersArray } from "../../actions/clear-answers-array";

const newAnswer = {
  userId: 1,
  type: "personal",
  chosenOption: "Yes",
  isCorrect: true,
  questionId: 1,
  topic: null
}

test('answersEntitiesReducer should return the initial state', () => {
  expect(answersEntitiesReducer(undefined, { type: undefined })).toEqual(
    {
      answers: [],
      answerIndex: 0,
    }
  )
})

test('answersEntitiesReducer adds new answers', () => {
  const previousState = { answers: [], answerIndex: 0 };
  expect(answersEntitiesReducer(previousState, addAnswer(newAnswer))).toEqual(
    { answers: [newAnswer], answerIndex: 0 }
  )
})

test('answersEntitiesReducer increments answers index', () => {
  const previousState = { answers: [newAnswer], answerIndex: 1 };
  expect(answersEntitiesReducer(previousState, incrementAnswersIndex())).toEqual(
    { answers: [newAnswer], answerIndex: 2 }
  )
})

test('answersEntitiesReducer should clear answers array', () => {
  const previousState = { answers: [newAnswer], answerIndex: 1 };
  expect(answersEntitiesReducer(previousState, clearAnswersArray())).toEqual(
    { answers: [], answerIndex: 1 }
  )
})
