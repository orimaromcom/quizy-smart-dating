import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useEffect, useState } from "react";

const SOME_USER_ID = 1;

export default function Quiz({ questions, removeQuestion }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(questions[questionIndex]);
  const [answerObject, setAnswerObject] = useState({});

  useEffect(() => {
    setQuestion(questions[questionIndex]);
    console.log(answerObject);
  }, [questions, questionIndex, answerObject]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={100 - questions.length} />
      <BasicQuestion
        question={question ? question : ""}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        SOME_USER_ID={SOME_USER_ID}
        setAnswerObject={setAnswerObject}
      />
      <button
        onClick={() => {
          removeQuestion(question);
        }}
      >
        skip
      </button>
    </div>
  );
}
