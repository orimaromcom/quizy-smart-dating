import "./basic-question.css";
import Options from "./Options/Options";
import Question from "./Question/Question";


import { useEffect, useState } from "react";

//We need to add loading state
//TODO decide what action to take once the index reaches the end of q array

export default function BasicQuestion({
  question,
  questionsLength,
  questionIndex,
  setQuestionIndex,
  MOCK_USER_ID,
  setAnswerObject,
  setAnswersCounter,
  answersCounter,
  setAnswersArray,
  answersArray,
  addAnswer,

}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let questionsArray = [];

    if (question.option1) {
      questionsArray = [question.option1, question.option2];
      if (question.option3 && question.option4 !== null) {
        questionsArray = [...questionsArray, question.option3, question.option4];
      }
      setOptions(questionsArray);
    }
  }, [question]);

  const optionHandler = (chosenOption) => {
    let answerIsCorrect = null;
    if (question.type === "trivia") {
      if (question.correctOption === chosenOption) {
        answerIsCorrect = true;
      } else {
        answerIsCorrect = false;
      }
    }

    const answerObject = {
      userId: MOCK_USER_ID,
      type: question.type,
      topic: question.topic,
      isCorrect: answerIsCorrect,
      questionId: question.id,
      chosenOption: chosenOption,
    };
    setAnswerObject(answerObject);
    setAnswersCounter(answersCounter + 1);
    setQuestionIndex(questionIndex + 1);
    const newAnswersArray = [...answersArray, answerObject];
    setAnswersArray(newAnswersArray);
    console.log("in basic question", answerObject)
    addAnswer(answerObject)
  
  };

  return (
    <div className="question-container">
      <Question text={question.question} />
      <Options options={options} optionHandler={optionHandler}  />
    </div>
  );
}
