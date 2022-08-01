import "./quiz.css";
import { useNavigate } from "react-router-dom";

import confetti from "canvas-confetti"
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import HeartLoader from "./HeartLoader/HeartLoader";
import Heart from "./Heart/Heart";
import AnswersApiService from "../../services/answers-api-service";
import { useEffect } from "react";

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
}) {

  const navigate = useNavigate();
  if (!userId) {
    navigate("/profile");
  }

  //TODO post distances
  //TODO pop up ***play again** or go to **heart button in brainmates**
  //When pressed play again, load more questions
  const isFinished = questions.length && answersArray.length === questions.length;
  useEffect(() => {
    if (!questions.length) {
      fetchNewQuestionsAction();
      updateQuoteAction();
    }
    if (isFinished) {
      confetti()
      AnswersApiService.postAnswers(answersArray);
      console.log(quote);
      console.log("you should remove questions once succeeded");
      console.log("you should remove pop up the heart page");
    }
  }, [fetchNewQuestionsAction, questions, answersArray, clearAnswersArray, isFinished]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={(questionIndex / questions.length) * 100} />
      {questionsLoading
        ? (<HeartLoader />)
        : console.log("stop loader")}
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
        <Heart quote={quote} />
      )}
    </div>
  );
}
