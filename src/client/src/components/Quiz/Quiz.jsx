import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import AnswersApiService from "../../services/answers-api-service";
import { useEffect, useState } from "react";

const SOME_USER_ID = 1;
const POST_ANSWERS_AFTER_NUMBER = 3;

export default function Quiz({ questions}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(questions[0]);
  const [answerObject, setAnswerObject] = useState({});
  const [answersArray, setAnswersArray] = useState([]);
  const [answersCounter, setAnswersCounter] = useState(0);

  useEffect(() => {
    setQuestion(questions[questionIndex]);
   
     if (answersCounter >= POST_ANSWERS_AFTER_NUMBER) {
      AnswersApiService.postAnswers(answersArray);
      setAnswersCounter(0);
      setAnswersArray([]);
    } 
  }, [questions,  questionIndex, answerObject, answersCounter, answersArray ]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={answersCounter * 30} />
      <BasicQuestion
        question={question ? question : ""}
        questionsLength={questions.length}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        SOME_USER_ID={SOME_USER_ID}
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
