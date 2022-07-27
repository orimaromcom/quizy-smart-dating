import "./option.css";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Skeleton } from "@mui/material";



export default function Option({ text, onClick }) {
  const theme = useTheme();
  return (
    <div className="option-container">
      <Button className="option-btn" variant="contained" onClick={onClick} > 
        {text}
      </Button >
      {/* <Skeleton
        className="answer-btn"
        variant="rectangular"
        animation="wave"
        style={{ height: "80%" }}
      /> */}
    </div>
  );
}
