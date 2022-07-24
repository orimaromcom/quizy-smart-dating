import "./ProgressBar.css";
import { Box, LinearProgress } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProgressBar() {
  return (
    <Box className="progress-bar-container">
      <LinearProgress
        className="progress-bar"
        variant="determinate"
        value={50}
      />
      <FavoriteIcon className="heart-icon" />
    </Box>
  );
}
