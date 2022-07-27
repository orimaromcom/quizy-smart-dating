import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useEffect, useState } from "react";

export default function Quiz({ questions, removeQuestion }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(questions[questionIndex]);

  useEffect(() => {
    setQuestion(questions[questionIndex]);
  }, [questions, questionIndex]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={100 - questions.length} />
      <BasicQuestion
        question={question ? question : ""}
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
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
