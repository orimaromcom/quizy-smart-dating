import "./Quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";

export default function Quiz() {
  return (
    <div className="quiz-container">
      <ProgressBar />
      <BasicQuestion />
    </div>
  );
}
