import "./question.css";
import { Skeleton } from "@mui/material";
import { decode } from "html-entities";

export default function Question({ text }) {
  return (
    <div className="question-text-container">
      <h1 className="question-text">{decode(text)}</h1>
    </div>
    // <Skeleton
    //   className="question-text-container"
    //   variant="rectangular"
    //   animation="wave"
    // />
  );
}
