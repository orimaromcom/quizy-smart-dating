import "./progress-bar.css";
import { Box, LinearProgress } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProgressBar({ progressPercentage }) {
  return (
    <Box className="progress-bar-container">
      <LinearProgress
        className="progress-bar"
        variant="determinate"
        value={progressPercentage}
      />
      <FavoriteIcon className="heart-icon" />
    </Box>
  );
}
