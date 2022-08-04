import "./achievement.css";
import { Chip } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import ComputerIcon from "@mui/icons-material/Computer";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { PieChart } from 'react-minimal-pie-chart';

export default function Achievement({ title, score }) {
  const renderIcon = () => {
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
      <div className="achievement-text">
        <p>{Math.round(score.correct/score.answers * 100) || 0}% correct</p>
        <p>({score.correct} out of {score.answers})</p>
      </div>
      <div className="achievement-pie">
        <PieChart
            data={[
              { title: 'Correct', value: score.correct, color: '#e42f45' },
              { title: 'Incorrect', value: score.answers - score.correct, color: '#CCCCCC' },
            ]}
            viewBoxSize={[200, 100]}
            center = {[100, 50]}
            startAngle = {180}
          />
      </div>

    </div>
  );
}
