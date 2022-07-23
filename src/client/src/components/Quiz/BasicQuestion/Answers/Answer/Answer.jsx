import "./Answer.css";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Skeleton } from "@mui/material";

export default function Answer() {
  const theme = useTheme();
  return (
    <div className="answer-container">
      <Button className="answer-btn" variant="contained" size="large">
        Answer
      </Button>
      {/* <Skeleton className="answer-btn" variant="rectangular" animation="wave" /> */}
    </div>
  );
}
