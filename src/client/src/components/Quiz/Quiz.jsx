import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";

//TEMP
import QuestionsApiService from "../../services/questions-api-service";

export default function Quiz() {
  //will recive question as a prop when redux will be init
  const question = QuestionsApiService.getQuestion("102");

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={50} />
      <BasicQuestion />
    </div>
  );
}
