import "./basic-question.css";
import Answers from "./Answers/Answers";
import Question from "./Question/Question";
import { useEffect, useState } from "react";

export default function BasicQuestion({ question }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers([
      question.option1,
      question.option2,
      question.option3,
      question.option4,
    ]);
  }, [question]);

  return (
    <div className="question-container">
      <Question text={question.question} />
      <Answers answers={answers} />
    </div>
  );
}
