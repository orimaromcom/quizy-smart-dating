import "./answers.css";
import Answer from "./Answer/Answer";

export default function Answers({ answers }) {
  return (
    <div className="Answers-container">
      {answers.map((answer, index) => {
        if (answer) return <Answer text={answer} key={index} />;
      })}
    </div>
  );
}
