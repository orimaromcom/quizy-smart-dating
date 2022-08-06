import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import HeartParticlesConnector from "../HeartParticlesAnimation/HeartParticleConnector";
import "./progress-bar.scss";

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
      <HeartParticlesConnector />
    </Box>
  );
}
