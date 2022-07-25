import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useEffect, useState } from "react";

export default function Quiz({ questions, removeQuestion }) {
  const [question, setQuestion] = useState(questions[0]);

  useEffect(() => {
    if (questions.length != 1) {
      setQuestion(questions[0]);
    }
  }, [questions]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={100 - questions.length} />
      <BasicQuestion question={question ? question : ""} />
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
