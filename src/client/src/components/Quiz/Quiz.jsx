import "./quiz.css";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

import { useNavigate } from "react-router-dom";


import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import HeartLoader from "./HeartLoader/HeartLoader";
import Heart from "./Heart/Heart";
import AnswersApiService from "../../services/answers-api-service";
import DistancesApiService from "../../services/distances-api-service";
import Page from "../Page/Page";
import { useEffect, useState } from "react";

export default function Quiz({
  fetchNewQuestionsAction,
  questions,
  userId,
  answersArray,
  addAnswer,
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
  if (!userId) {
    navigate("/profile");
  }
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
        // AnswersApiService.postAnswers(answersArray);
        //DistancesApiService.postDistances(MOCK_USER_ID)

        clearAnswersArray();
      }

      console.log("you should remove questions once succeeded");
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
          addAnswer={addAnswer}
          incrementQuestionIndexAction={incrementQuestionIndexAction}
          questionIndex={questionIndex}
        />
      ) : (
        <>
          <Heart
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
