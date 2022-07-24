import "./BasicQuestion.css";
import Answers from "./Answers/Answers";
import Question from "./Question/Question";

export default function BasicQuestion() {
  return (
    <div className="question-container">
      <Question />
      <Answers />
    </div>
  );
}
