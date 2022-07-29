import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useEffect} from "react";

export default function Quiz({
  fetchNewQuestions,
  questions,
  MOCK_USER_ID,
  answersArray,
  addAnswer,
  questionIndex,
  incrementQuestionIndex,
  incrementAnswersIndex,
}) {
  // AnswersApiService.postAnswers(answersArray);
  //once progress bar is full

  //TODO post distances
  //TODO pop up ***play again** or go to **heart button in brainmates**
  //When pressed play again, load more questions
  useEffect(() => {
    if (!questions.length) {
      fetchNewQuestions();
    }
  }, [fetchNewQuestions, questions]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={(questionIndex / questions.length) * 100} />
      <BasicQuestion
        question={questions[questionIndex] ? questions[questionIndex] : ""}
        MOCK_USER_ID={MOCK_USER_ID}
        incrementAnswersIndex={incrementAnswersIndex}
        answersArray={answersArray}
        addAnswer={addAnswer}
        incrementQuestionIndex={incrementQuestionIndex}
      />
      <button
        onClick={() => {
          incrementQuestionIndex();
        }}
      >
        skip
      </button>
    </div>
  );
}
