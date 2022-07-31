import "./quiz.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import HeartLoader from "./HeartLoader/HeartLoader";
import Heart from "./Heart/Heart";
import AnswersApiService from "../../services/answers-api-service";
import DistancesApiService from "../../services/distances-api-service";
import BrainmatesConnector from "../Brainmates/brainmates-connector";
import Page from "../Page/Page";
import { useEffect, useState } from "react";

export default function Quiz({
  fetchNewQuestions,
  questions,
  MOCK_USER_ID,
  answersArray,
  addAnswer,
  questionIndex,
  incrementQuestionIndex,
  incrementAnswersIndex,
  questionsLoading,
  clearAnswersArray,
  updateQuote,
  quote,
  fetchNewSuggestionsAction,
}) {
  const isFinished = questions.length && questionIndex === questions.length;
  const [heartClicked, setHeartClicked] = useState(false);

  useEffect(() => {
    if (!questions.length) {
      fetchNewQuestions();
      updateQuote();
    }
    if (isFinished) {
      confetti();
      if (answersArray.length) {
        // AnswersApiService.postAnswers(answersArray);
        //DistancesApiService.postDistances(MOCK_USER_ID)

        clearAnswersArray();
      }

      console.log("you should remove questions once succeeded");
      console.log("you should remove pop up the heart page");
    }
  }, [fetchNewQuestions, questions, answersArray, clearAnswersArray, isFinished]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={(questionIndex / questions.length) * 100} />
      {questionsLoading ? <HeartLoader /> : null}
      {!isFinished ? (
        <BasicQuestion
          question={questions[questionIndex] ? questions[questionIndex] : ""}
          MOCK_USER_ID={MOCK_USER_ID}
          incrementAnswersIndex={incrementAnswersIndex}
          answersArray={answersArray}
          addAnswer={addAnswer}
          incrementQuestionIndex={incrementQuestionIndex}
          questionIndex={questionIndex}
        />
      ) : (
        <>
          <Heart
            quote={quote}
            fetchNewSuggestionsAction={fetchNewSuggestionsAction}
            MOCK_USER_ID={MOCK_USER_ID}
            heartClicked={heartClicked}
            setHeartClicked={setHeartClicked}
          />
          <Button variant="text">Continue Playing</Button>
        </>
      )}
    </div>
  );
}
