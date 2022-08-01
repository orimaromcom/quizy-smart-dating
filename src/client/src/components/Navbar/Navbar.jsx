import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/InterestsTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar({ pageButtonValue, updatePageButtonAction }) {
  const currentPage = window.location.href.split("/").pop();
  updatePageButtonAction(currentPage);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={pageButtonValue}
        onChange={(event, newValue) => {
          updatePageButtonAction(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          value="quiz"
          to="/quiz"
          icon={<PsychologyIcon sx={{ fontSize: 45 }} />}
        />
        <BottomNavigationAction
          component={Link}
          value="brainmates"
          to="/brainmates"
          icon={<FavoriteIcon sx={{ fontSize: 45 }} />}
        />
        <BottomNavigationAction
          component={Link}
          value="achievements"
          to="/achievements"
          icon={<EmojiEventsIcon sx={{ fontSize: 45 }} />}
        />
        <BottomNavigationAction
          component={Link}
          value="profile"
          to="/profile"
          icon={<PersonIcon sx={{ fontSize: 45 }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
