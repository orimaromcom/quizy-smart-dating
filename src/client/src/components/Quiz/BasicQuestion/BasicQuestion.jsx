import "./basic-question.css";
import Options from "./Options/Options";
import Question from "./Question/Question";
import { useEffect, useState } from "react";

//We need to think here on better logic maybe bu this works
//We need to add loading state
//TODO decide what action to take once the index reaches the end of q array

const CURRENT_NUMBER_OF_QUESTIONS = 82;

export default function BasicQuestion({
  question,
  questionIndex,
  setQuestionIndex,
  SOME_USER_ID,
  setAnswerObject,
}) {
  const [options, setOptions] = useState([]);
  const [chosenOption, setChosenOption] = useState({});

  useEffect(() => {
    setOptions([question.option1, question.option2, question.option3, question.option4]);
    if (question.option3 == null) {
      setOptions([question.option1, question.option2]);
    }
  }, [question]);

  useEffect(() => {
    let answerIsCorrect = null;
    if (question.type === "trivia") {
      if (question.correctOption === chosenOption.chosenOption) {
        answerIsCorrect = true;
      } else {
        answerIsCorrect = false;
      }
    }

    const answerObject = {
      userId: SOME_USER_ID,
      type: question.type,
      topic: question.topic,
      isCorrect: answerIsCorrect,
      questionId: question.questionId,
      chosenOption: chosenOption.chosenOption,
    };
    setAnswerObject(answerObject);

    setQuestionIndex(questionIndex + 1);
  }, [chosenOption]);

  return (
    <div className="question-container">
      <Question text={question.question} />
      <Options options={options} setChosenOption={setChosenOption} />
    </div>
  );
}
