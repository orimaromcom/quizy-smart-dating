import "./quiz.css";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

import { useNavigate } from "react-router-dom";

import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import HeartLoader from "./HeartLoader/HeartLoader";
import HeartConnector from "./Heart/HeartConnector.js";
import AnswersApiService from "../../services/answers-api-service";
import DistancesApiService from "../../services/distances-api-service";
import { useEffect, useState } from "react";

export default function Quiz({
  fetchNewQuestionsAction,
  questions,
  userId,
  answersArray,
  addAnswerAction,
  questionIndex,
  incrementQuestionIndexAction,
  incrementAnswersIndexAction,
  questionsLoading,
  clearAnswersArray,
  updateQuoteAction,
  quote,
  fetchNewSuggestionsAction,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }
  }, [navigate, userId]);

  const isFinished = questions.length && questionIndex === questions.length;
  const [heartClicked, setHeartClicked] = useState(false);

  useEffect(() => {
    if (!questions.length) {
      fetchNewQuestionsAction();
      updateQuoteAction();
    }
    if (isFinished) {
      confetti();
      if (answersArray.length) {
        AnswersApiService.postAnswers(answersArray);
        DistancesApiService.postDistances(userId);

        clearAnswersArray();
      }

      console.log("you should remove questions once play again");
    }
  }, [fetchNewQuestionsAction, questions, answersArray, clearAnswersArray, isFinished]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={(questionIndex / questions.length) * 100} />
      {questionsLoading ? <HeartLoader /> : null}
      {!isFinished ? (
        <BasicQuestion
          question={questions[questionIndex] ? questions[questionIndex] : ""}
          userId={userId}
          incrementAnswersIndexAction={incrementAnswersIndexAction}
          answersArray={answersArray}
          addAnswer={addAnswerAction}
          incrementQuestionIndexAction={incrementQuestionIndexAction}
          questionIndex={questionIndex}
        />
      ) : (
        <>
          <HeartConnector
            quote={quote}
            fetchNewSuggestionsAction={fetchNewSuggestionsAction}
            userId={userId}
            heartClicked={heartClicked}
            setHeartClicked={setHeartClicked}
          />
          <Button variant="text">Continue Playing</Button>
        </>
      )}
    </div>
  );
}
