import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useEffect, useState } from "react";

export default function Quiz({ questions }) {
  // const [questions, setQuestions] = useState({});

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={50} />
      <BasicQuestion />
    </div>
  );
}
