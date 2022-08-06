import { useEffect, useState } from "react";
import Options from "./Options/Options";
import Question from "./Question/Question";
import correctAnswerSound from "../../../assets/sounds/correctAnswerSound.mp3";
import incorrectAnswerSound from "../../../assets/sounds/incorrectAnswerSound.wav";
import { pop } from "../HeartParticlesAnimation/HeartParticles";
import "./basic-question.css";

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

  const optionHandler = (chosenOption, e) => {
    console.log(isAudio);
    let answerIsCorrect = null;
    if (question.type === "trivia") {
      if (question.correctOption === chosenOption) {
        answerIsCorrect = true;
        pop(e);
        if (isAudio) {
          if (answersArray.length < 9) {
            correctSound.play();
          }
        }
        incrementScoreAction();
      } else {
        answerIsCorrect = false;
        toggleIsBrokenAction();

        setTimeout(function () {
          toggleIsBrokenAction();
        }, 1500);
        if (isAudio) {
          if (answersArray.length < 9) {
            incorrectSound.play();
          }
        }
      }
    } else {
      pop(e);
      if (isAudio) {
        correctSound.play();
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
