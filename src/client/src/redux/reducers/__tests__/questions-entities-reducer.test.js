import questionsEntitiesReducer from "../questions-entities-reducer";
import { fetchQuestionsSuccess } from "../../actions/fetch-questions-action";
import { incrementQuestionIndex } from "../../actions/increment-questions-index-actions";
import { clearQuestionsIndex } from "../../actions/clear-questions-index";
import { clearQuestionsArray } from "../../actions/clear-questions-array";
import { updateQuote } from "../../actions/update-quote-actions";

const initialState = {
  questions: [],
  questionIndex: 0,
  questionsLoading: false,
  quote: null,
};

const questions = ["First question object", "Second question object", "Third question object"];

const quote = "Some nice quote about love";

test('questionsEntitiesReducer should return the initial state', () => {
  expect(questionsEntitiesReducer(undefined, { type: undefined })).toEqual(
    {
      ...initialState
    }
  )
})

test('questionsEntitiesReducer should fetch questions', () => {
  const previousState = { ...initialState };
  expect(questionsEntitiesReducer(previousState, fetchQuestionsSuccess(questions))).toEqual(
    { ...initialState, questions: questions }
  )
})

test('questionsEntitiesReducer increments questions index', () => {
  const previousState = { ...initialState, questions: questions };
  expect(questionsEntitiesReducer(previousState, incrementQuestionIndex())).toEqual(
    { ...initialState, questions: questions, questionIndex: 1 }
  )
})

test('questionsEntitiesReducer clears questions index', () => {
  const previousState = { ...initialState, questions: questions, questionIndex: 2 };
  expect(questionsEntitiesReducer(previousState, clearQuestionsIndex())).toEqual(
    { ...initialState, questions: questions, questionIndex: 0 }
  )
})

test('questionsEntitiesReducer should clear questions array', () => {
  const previousState = { ...initialState, questions: questions };
  expect(questionsEntitiesReducer(previousState, clearQuestionsArray())).toEqual(
    { ...initialState }
  )
})

test('questionsEntitiesReducer should update quote', () => {
  const previousState = { ...initialState };
  expect(questionsEntitiesReducer(previousState, updateQuote(quote))).toEqual(
    { ...initialState, quote: quote }
  )
})
