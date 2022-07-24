import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  //takes the navbar firs value from current window location
  const currentPage = window.location.href.split("/").pop();
  const [value, setValue] = useState(currentPage);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          value="quiz"
          to="/quiz"
          label="Quiz"
          icon={<PsychologyIcon />}
        />
        <BottomNavigationAction
          component={Link}
          value="brain-mates"
          to="/brain-mates"
          label="Brainmates"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={Link}
          value="achievements"
          to="/achievements"
          label="Achievements"
          icon={<EmojiEventsIcon />}
        />
        <BottomNavigationAction
          component={Link}
          value="profile"
          to="/profile"
          label="Profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
