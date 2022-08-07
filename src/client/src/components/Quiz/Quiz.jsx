import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import confetti from "canvas-confetti";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import HeartConnector from "./Heart/HeartConnector.js";
import quizEndSoundFile from "../../assets/sounds/quizEndSound.mp3";
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
  clearAnswersArrayAction,
  updateQuoteAction,
  fetchNewSuggestionsAction,
  clearQuestionsArrayAction,
  clearQuestionsIndexAction,
  postDistancesAction,
  isAudio,
  toggleIsBrokenAction,
  incrementScoreAction,
  postAnswersAction,
  quote,
  fetchAchievementsAction
}) {
  const [playAgainClicked, setPlayAgainClicked] = useState(false);
  const quizEndSound = new Audio(quizEndSoundFile);

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
        await fetchNewQuestionsAction();
        await updateQuoteAction();
      })();
    }
    if (isFinished) {
      confetti();
      async function postAnswersPostDistancesGetSuggestions(answersArray, userId) {
        await postAnswersAction(answersArray);
        await fetchAchievementsAction(userId);
        await postDistancesAction(userId);
        await fetchNewSuggestionsAction(userId);
      }
      if (answersArray.length) {
        postAnswersPostDistancesGetSuggestions(answersArray, userId);
        clearAnswersArrayAction();
        confetti();
        if (isAudio) {
          quizEndSound.play();
        }
      }
    }
  }, [fetchNewQuestionsAction, questions, answersArray, clearAnswersArrayAction, isFinished]);

  return (
    <div className="quiz-container">
      {!isFinished ? (
        <>
          <ProgressBar progressPercentage={(questionIndex / questions.length) * 100} />
          <BasicQuestion
            question={questions[questionIndex] ? questions[questionIndex] : ""}
            userId={userId}
            incrementAnswersIndexAction={incrementAnswersIndexAction}
            answersArray={answersArray}
            addAnswer={addAnswerAction}
            incrementQuestionIndexAction={incrementQuestionIndexAction}
            questionIndex={questionIndex}
            incrementScoreAction={incrementScoreAction}
            isAudio={isAudio}
            toggleIsBrokenAction={toggleIsBrokenAction}
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
