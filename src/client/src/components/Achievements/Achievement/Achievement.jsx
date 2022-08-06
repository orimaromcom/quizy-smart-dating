import "./achievement.css";
import { Chip } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import ComputerIcon from "@mui/icons-material/Computer";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { PieChart } from "react-minimal-pie-chart";

export default function Achievement({ title, score }) {
  const renderChip = () => {
    switch (title) {
      case "Film":
        return {
          icon: <MovieCreationIcon style={{ color: "#111111" }} />,
          color: "error",
        };
      case "Sports":
        return {
          icon: <SportsBasketballIcon style={{ color: "#ff9100" }} />,
          color: "success",
        };
      case "Computers":
        return {
          icon: <ComputerIcon style={{ color: "#1c54b2" }} />,
          color: "warning",
        };
      case "Celebrities":
        return {
          icon: <StarIcon style={{ color: "#ffea00" }} />,
          color: "info",
        };
      case "History":
        return {
          icon: <AccountBalanceIcon style={{ color: "#a1887f" }} />,
          color: "primary",
        };
      case "Music":
        return {
          icon: <MusicNoteIcon style={{ color: "#e91e63" }} />,
          color: "secondary",
        };
      default:
        return {
          icon: <EmojiEventsIcon />,
          color: "primary",
        };
    }
  };

  return (
    <div className="achievement-container">
      <Chip
        className="achievement-chip"
        label={title}
        icon={renderChip().icon}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          boxShadow: `2px 2px 3px gray`,
        }}
        color={renderChip().color}
      />
      <div className="achievement-text">
        <p className="precent">
          {Math.round((score.correct / score.answers) * 100) || 0}% correct
        </p>
        <p className="number">
          ({score.correct} out of {score.answers})
        </p>
      </div>
      <div className="achievement-pie">
        <PieChart
          data={[
            { title: "Correct", value: score.correct, color: "#e42f45" },
            {
              title: "Incorrect",
              value: score.answers - score.correct,
              color: "#CCCCCC",
            },
          ]}
          viewBoxSize={[200, 100]}
          center={[100, 50]}
          startAngle={180}
        />
      </div>
    </div>
  );
}
