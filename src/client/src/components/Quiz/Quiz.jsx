import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import confetti from "canvas-confetti";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import HeartConnector from "./Heart/HeartConnector.js";
import "./quiz.css";

export default function Quiz({
  fetchNewQuestionsAction,
  questions,
  userId,
  answersArray,
  addAnswerAction,
  questionIndex,
  incrementQuestionIndexAction,
  incrementAnswersIndexAction,
  clearAnswersArray,
  updateQuoteAction,
  fetchNewSuggestionsAction,
  clearQuestionsArrayAction,
  clearQuestionsIndexAction,
  postDistancesAction,
  incrementScoreAction,
  postAnswersAction,
  quote,
  suggestions,
}) {
  const [playAgainClicked, setPlayAgainClicked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }
  }, [navigate, userId]);

  const playAgainHandler = () => {
    setPlayAgainClicked(true);
    clearQuestionsArrayAction();
    clearQuestionsIndexAction();
    updateQuoteAction();
    fetchNewQuestionsAction();
  };

  const isFinished = questions.length && questionIndex === questions.length;

  useEffect(() => {
    if (!questions.length && !playAgainClicked) {
      (async function () {
        // await fetchNewQuestionsAction();
        // await updateQuoteAction();
        Promise.all([fetchNewQuestionsAction(), updateQuoteAction()])
      })();
    }
    if (isFinished) {
      confetti();
      async function postAnswersPostDistancesGetSuggestions(
        answersArray,
        userId
      ) {
        (async function () {
          Promise.all([
            postAnswersAction(answersArray),
            postDistancesAction(userId),
            fetchNewSuggestionsAction(userId)
          ])
          // await postAnswersAction(answersArray);
          // await postDistancesAction(userId);
          // await fetchNewSuggestionsAction(userId);
        })();
      }
      if (answersArray.length) {
        postAnswersPostDistancesGetSuggestions(answersArray, userId);
        clearAnswersArray();
      }
    }
  }, [
    fetchNewQuestionsAction,
    questions,
    answersArray,
    clearAnswersArray,
    isFinished,
  ]);

  return (
    <div className="quiz-container">
      {!isFinished ? (
        <>
          <ProgressBar
            progressPercentage={(questionIndex / questions.length) * 100}
          />
          <BasicQuestion
            question={questions[questionIndex] ? questions[questionIndex] : ""}
            userId={userId}
            incrementAnswersIndexAction={incrementAnswersIndexAction}
            answersArray={answersArray}
            addAnswer={addAnswerAction}
            incrementQuestionIndexAction={incrementQuestionIndexAction}
            questionIndex={questionIndex}
            incrementScoreAction={incrementScoreAction}
          />
        </>
      ) : (
        <>
          <HeartConnector
            fetchNewSuggestionsAction={fetchNewSuggestionsAction}
            userId={userId}
            setPlayAgainClicked={setPlayAgainClicked}
            quote={quote}
          />
          <div className="play_again_btn">
            <Button variant="contained" onClick={() => playAgainHandler()}>
              Play again 🏹 💑
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
