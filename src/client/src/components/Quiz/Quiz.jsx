import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import AnswersApiService from "../../services/answers-api-service";
import { useEffect, useState } from "react";

export default function Quiz({ questions, MOCK_USER_ID }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(questions[0]);
  const [answerObject, setAnswerObject] = useState({});
  const [answersArray, setAnswersArray] = useState([]);
  const [answersCounter, setAnswersCounter] = useState(0);

  useEffect(() => {
  
    setQuestion(questions[questionIndex]);

    //once progress bar is full

    if (answersCounter === 10) {
      AnswersApiService.postAnswers(answersArray);

      //TODO post distances
      //TODO pop up ***play again** or go to **heart button in brainmates**
      //When pressed play again, load more questions

      setAnswersCounter(0);
      setAnswersArray([]);
    }
  }, [questions, questionIndex, answerObject, answersCounter, answersArray]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={(answersCounter / questions.length) * 100 + 10} />
      <BasicQuestion
        question={question ? question : ""}
        questionsLength={questions.length}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        MOCK_USER_ID={MOCK_USER_ID}
        setAnswerObject={setAnswerObject}
        setAnswersCounter={setAnswersCounter}
        answersCounter={answersCounter}
        setAnswersArray={setAnswersArray}
        answersArray={answersArray}
      />
      <button
        onClick={() => {
          setQuestionIndex(questionIndex + 1);
        }}
      >
        skip
      </button>
    </div>
  );
}
