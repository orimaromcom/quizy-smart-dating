import { decode } from "html-entities";
import "./question.css";

export default function Question({ text }) {
  return (
    <div className="question-text-container">
      <h1 className="question-text">{decode(text)}</h1>
    </div>
  );
}
