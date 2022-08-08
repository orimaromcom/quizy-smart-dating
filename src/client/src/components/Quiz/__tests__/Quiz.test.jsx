import { BrowserRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import Quiz from "../Quiz";

let questions = [
  {
    id: 1,
    question: "If you and your other significant were at a club, what would the other be doing?",
    type: "personal",
    topic: null,
    amountOfOptions: "multiple",
    option1: "Dancing with you",
    option2: "Sitting in the corner",
    option3: "With someone else",
    option4: "In the middle of the dance floor",
    correctOption: null,
  },
  {
    id: 2,
    question: "What is John Depp's middle name?",
    type: "trivia",
    topic: "celebrities",
    amountOfOptions: "multiple",
    option1: "Christopher",
    option2: "Michael",
    option3: "Maria",
    option4: "Sebastian",
    correctOption: "Christopher",
  },
]

const newSuggestions = {
  "closest": {
      "userId": 43,
      "likeBack": true
  },
  "farthest": {
      "userId": 10,
      "likeBack": true
  }
}

let answersArray = ["first answer object", "second answer object"];
let quote = "All you need is love";
let questionIndex = 0;

const mockFetchAchievementsAction = jest.fn().mockImplementation(() => {
  return Promise.resolve({quote: "All we need is love"});
});
const mockUpdateQuoteAction = jest.fn().mockImplementation(() => {
  return Promise.resolve();
});
const mockPostDistancesAction = jest.fn().mockImplementation(() => {
  return Promise.resolve();
});
const mockPostAnswersAction = jest.fn().mockImplementation(() => {
  return Promise.resolve();
});
const mockFetchNewQuestionsAction = jest.fn().mockImplementation(() => {
  return Promise.resolve(questions);
});
const mockAddAnswerAction = jest.fn((answer) => {
  return [...answersArray, answer];
});
const mockIncrementQuestionIndexAction = jest.fn(() => {
  questionIndex += 1;
});
const mockClearAnswersArrayAction = jest.fn(() => {
  answersArray = []}
);
const mockClearQuestionsArrayAction = jest.fn(() => {
  questions = []
});
const mockToggleIsBrokenAction = jest.fn(() => {
  console.log("Calling mockToggleIsBrokenAction");
});
const mockIncrementScoreAction = jest.fn(() => {
  console.log("Calling mockIncrementScoreAction");
});
const mockFetchNewSuggestionsAction = jest.fn(() => {
  console.log("Calling mockIncrementScoreAction");
});
const mockConfetti = jest.fn(() => {
  console.log("Calling mockConfetti");
})

const TestQuizComponent = <Provider store={store}>
                            <BrowserRouter>
                              <Quiz
                                fetchNewQuestionsAction={mockFetchNewQuestionsAction}
                                questions={questions}
                                userId={1}
                                answersArray={answersArray}
                                addAnswerAction={mockAddAnswerAction}
                                questionIndex={questionIndex}
                                incrementQuestionIndexAction={mockIncrementQuestionIndexAction}
                                incrementAnswersIndexAction={() => {}}
                                clearAnswersArrayAction={mockClearAnswersArrayAction}
                                updateQuoteAction={mockUpdateQuoteAction}
                                fetchNewSuggestionsAction={mockFetchNewSuggestionsAction}
                                clearQuestionsArrayAction={mockClearQuestionsArrayAction}
                                clearQuestionsIndexAction={() => {}}
                                postDistancesAction={mockPostDistancesAction}
                                isAudio={false}
                                toggleIsBrokenAction={mockToggleIsBrokenAction}
                                incrementScoreAction={mockIncrementScoreAction}
                                postAnswersAction={mockPostAnswersAction}
                                quote={quote}
                                fetchAchievementsAction={mockFetchAchievementsAction}
                                confetti={mockConfetti}
                              />
                            </BrowserRouter>
                          </Provider>

describe("Quiz component", () => {
  test("should show question and options", () => {
    render(TestQuizComponent);
    const questionText = screen.getByText(questions[0].question);
    expect(questionText).toBeInTheDocument();
    const optionNumbers = [1, 2, 3, 4];
    optionNumbers.forEach(number => {
      const optionText = screen.getByText(questions[0][`option${number}`]);
      expect(optionText).toBeInTheDocument();
    });
  });
})
