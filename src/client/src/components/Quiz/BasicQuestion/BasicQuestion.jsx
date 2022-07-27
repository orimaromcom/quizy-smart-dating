import "./basic-question.css";
import Options from "./Options/Options";
import Question from "./Question/Question";
import { useEffect, useState } from "react";

//We need to think here on better logic maybe bu this works
//We need to add loading state
//TODO decide what action to take once the index reaches the end of q array

const CURRENT_NUMBER_OF_QUESTIONS = 82;

export default function BasicQuestion({ question, questionIndex, setQuestionIndex }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([question.option1, question.option2, question.option3, question.option4]);
    if (question.option3 == null) {
      setOptions([question.option1, question.option2]);
    }
  }, [question]);

  const [chosenOption, setChosenOption] = useState({});
  useEffect(() => {
    setQuestionIndex(questionIndex + 1);
    console.log(chosenOption)
  }, [chosenOption]);

  return (
    <div className="question-container">
      <Question text={question.question} />
      <Options options={options} setChosenOption={setChosenOption} />
    </div>
  );
}
