import "./progress-bar.css";
import { Box, LinearProgress } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React, { useState } from "react";


export default function ProgressBar({ progressPercentage }) {
 
  return (
    <Box className="progress-bar-container">
      <LinearProgress
        className="progress-bar"
        variant="determinate"
        value={progressPercentage || 0}
      />
      <FavoriteIcon className="heart-icon" color={"primary"} />
     
    </Box>
  );
}
