import "./Question.css";
import { Skeleton } from "@mui/material";

export default function Question() {
  return (
    <div className="question-text-container">
      <h1 className="question-text">What is the best project?</h1>
    </div>
    // <Skeleton
    //   className="question-text-container"
    //   variant="rectangular"
    //   animation="wave"
    // />
  );
}
