import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import confetti from "canvas-confetti";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import HeartConnector from "./Heart/HeartConnector.js";
import AnswersApiService from "../../services/answers-api-service";
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
  quote,
  fetchNewSuggestionsAction,
  clearQuestionsArrayAction,
  clearQuestionsIndexAction,
  isLoading,
  postDistancesAction,
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
    if (!questions.length && !playAgainClicked && !isLoading) {
      fetchNewQuestionsAction();
      updateQuoteAction();
    }
    if (isFinished) {
      confetti();

      async function postAnswersPostDistancesGetSuggestions(
        answersArray,
        userId
      ) {
        await AnswersApiService.postAnswers(answersArray);
        await postDistancesAction(userId);
        await fetchNewSuggestionsAction(userId);
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
      {!isFinished && !isLoading ? (
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
          />
        </>
      ) : isLoading ? null : (
        <>
          <p>New suggestions were found for you!</p>
          <p>Press the big heart!</p>
          <HeartConnector
            quote={quote}
            fetchNewSuggestionsAction={fetchNewSuggestionsAction}
            userId={userId}
            setPlayAgainClicked={setPlayAgainClicked}
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
