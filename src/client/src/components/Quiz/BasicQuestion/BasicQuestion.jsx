import "./basic-question.css";
import Options from "./Options/Options";
import Question from "./Question/Question";
import { useEffect, useState } from "react";

export default function BasicQuestion({ question }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([
      question.option1,
      question.option2,
      question.option3,
      question.option4,
    ]);
  }, [question]);

  const [questionData, setQuestionData] = useState({})
  useEffect (() => {
    console.log(questionData)
    console.log(question)
  }, [questionData]) 

  return (
    <div className="question-container">
      <Question text={question.question} />
      <Options options={options}  setQuestionData={setQuestionData} />
    </div>
  );
}
