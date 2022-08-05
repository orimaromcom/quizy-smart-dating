import "./basic-question.css";
import Options from "./Options/Options";
import Question from "./Question/Question";

import { useEffect, useState } from "react";
import correctAnswerSound from "../../../assets/sounds/correctAnswerSound.mp3";
import incorrectAnswerSound from "../../../assets/sounds/incorrectAnswerSound.wav";
import { pop } from "../HeartParticlesAnimation/HeartParticles";

export default function BasicQuestion({
  question,
  userId,
  addAnswer,
  incrementQuestionIndexAction,
  incrementAnswersIndexAction,
  questions,
  answersArray,

  isAudio,
  toggleIsBrokenAction,

  incrementScoreAction,
}) {
  const [options, setOptions] = useState([]);
  const correctSound = new Audio(correctAnswerSound);
  const incorrectSound = new Audio(incorrectAnswerSound);

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
  const muteOnLastQuestion = answersArray.length === 9 && isAudio;

  const optionHandler = (chosenOption, e) => {
    let answerIsCorrect = null;
    if (question.type === "trivia") {
      if (question.correctOption === chosenOption) {
        answerIsCorrect = true;

        if (!muteOnLastQuestion) {
          correctSound.play();
          pop(e);
        }

        incrementScoreAction();
      } else {
        answerIsCorrect = false;
        if (!muteOnLastQuestion) {
          incorrectSound.play();
          toggleIsBrokenAction();

          setTimeout(function () {
            toggleIsBrokenAction();
          }, 1500);
        }
      }
    } else {
      if (!muteOnLastQuestion) {
        correctSound.play();
        pop(e);
      }
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
