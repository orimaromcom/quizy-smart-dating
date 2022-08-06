import "./option.css";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Option({ text, onClick }) {
  return (
    <div className="option-container">
      <Button
        id="option-button-id"
        className="option-btn"
        variant="contained"
        onClick={onClick}
      >
        {text}
      </Button>
    </div>
  );
}
