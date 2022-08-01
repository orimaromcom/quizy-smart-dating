import "./achievement.css";
import { Chip } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import ComputerIcon from "@mui/icons-material/Computer";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function Achievement({ title, score }) {
  const renderIcon = () => {
    console.log(title);
    switch (title) {
      case "Film":
        return <MovieCreationIcon />;
      case "Sports":
        return <SportsBasketballIcon />;
      case "Computers":
        return <ComputerIcon />;
      case "Celebrities":
        return <StarIcon />;
      case "History":
        return <AccountBalanceIcon />;
      case "Music":
        return <MusicNoteIcon />;

      default:
        return <MovieCreationIcon />;
    }
  };

  return (
    <div className="achievement-container">
      <Chip className="achievement-chip" label={title} icon={renderIcon()} />
      <p>
        {score.correct} out of {score.answers}
      </p>
    </div>
  );
}
