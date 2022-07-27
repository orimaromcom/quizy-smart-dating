import "./answer.css";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Skeleton } from "@mui/material";

export default function Answer({ text }) {
  const theme = useTheme();
  return (
    <div className="answer-container">
      <Button className="answer-btn" variant="contained">
        {text}
      </Button>
      {/* <Skeleton
        className="answer-btn"
        variant="rectangular"
        animation="wave"
        style={{ height: "80%" }}
      /> */}
    </div>
  );
}
