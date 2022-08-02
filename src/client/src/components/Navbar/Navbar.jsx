import { Link } from "react-router-dom";
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
    (pageButtonValue === "login" ? null :(<Box>
      <BottomNavigation
        showLabels
        value={pageButtonValue}
        onChange={(event, newValue) => {
          updatePageButtonAction(newValue);
        }}
      >
        <BottomNavigationAction
          id="Mui-selected-quiz"
          component={Link}
          value="quiz"
          to="/quiz"
          icon={<PsychologyIcon sx={{ fontSize: 45 }} />}
        />
        <BottomNavigationAction
          id="Mui-selected-brainmates"
          component={Link}
          value="brainmates"
          to="/brainmates"
          icon={<FavoriteIcon sx={{ fontSize: 45 }} />}
        />
        <BottomNavigationAction
          id="Mui-selected-achievements"
          component={Link}
          value="achievements"
          to="/achievements"
          icon={<EmojiEventsIcon sx={{ fontSize: 45 }} />}
        />
        <BottomNavigationAction
        id="Mui-selected-profile"
          component={Link}
          value="profile"
          to="/profile"
          icon={<PersonIcon sx={{ fontSize: 45 }} />}
        />
      </BottomNavigation>
    </Box>))
  );
}
