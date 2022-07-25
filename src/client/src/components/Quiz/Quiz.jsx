import "./quiz.css";
import BasicQuestion from "./BasicQuestion/BasicQuestion";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useEffect, useState } from "react";
import { SkipIcon } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Quiz({ questions, removeQuestion }) {
  const [question, setQuestion] = useState(questions[0]);

  useEffect(() => {
    if (questions.length != 1) {
      setQuestion(questions[0]);
    }
  }, [questions]);

  return (
    <div className="quiz-container">
      <ProgressBar progressPercentage={100 - questions.length} />
      <BasicQuestion question={question ? question : ""} />
      <Button
        variant="contained"
        endIcon={<SkipIcon />}
        onClick={() => {
          removeQuestion(question);
        }}
        color={"secondary"}
      >
        skip
      </Button>
    </div>
  );
}
