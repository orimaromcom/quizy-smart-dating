import "./basic-question.css";
import Options from "./Options/Options";
import Question from "./Question/Question";

import { useEffect, useState } from "react";
import correctAnswerSound from "../../../assets/sounds/correctAnswerSound.mp3";
import incorrectAnswerSound from "../../../assets/sounds/incorrectAnswerSound.wav";
import personalAnswerSound from "../../../assets/sounds/personalPreferenceSound.wav";

//We need to add loading state
//TODO decide what action to take once the index reaches the end of q array

export default function BasicQuestion({
  question,
  userId,
  addAnswer,
  incrementQuestionIndexAction,
  incrementAnswersIndexAction,
  questions,
  answersArray,
}) {
  const [options, setOptions] = useState([]);
  const correctSound = new Audio(correctAnswerSound);
  const incorrectSound = new Audio(incorrectAnswerSound);
 //const personalSound = new Audio(personalAnswerSound)

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
        correctSound.play();
      } else {
        answerIsCorrect = false;
        incorrectSound.play();
      }
    } else {
      //personalSound.play();
    }

    const answerObject = {
      userId: userId,
      type: question.type,
      topic: question.topic,
      isCorrect: answerIsCorrect,
      questionId: question.id,
      chosenOption: chosenOption,
    };
    incrementAnswersIndexAction();
    incrementQuestionIndexAction();

    addAnswer(answerObject, answersArray, questions);
  };

  return (
    <div className="question-container">
      <Question text={question.question} />
      <Options options={options} optionHandler={optionHandler} />
    </div>
  );
}
