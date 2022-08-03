import "./progress-bar.scss";
import { Box } from "@mui/material";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartParticles from "../HeartParticlesAnimation/HeartParticles";

import { styled } from "@mui/material/styles";

import React from "react";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 15,
  borderRadius: 5,

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));



export default function ProgressBar({ progressPercentage }) {
  return (
    <Box className="progress-bar-container">
      <BorderLinearProgress
        className="progress-bar"
        variant="determinate"
        value={progressPercentage || 0}
        height={10}
      />
    {/*   <FavoriteIcon className="heart-icon" color={"primary"} sx={{ fontSize: 70 }} /> */}
      <HeartParticles />
    </Box>
  );
}
