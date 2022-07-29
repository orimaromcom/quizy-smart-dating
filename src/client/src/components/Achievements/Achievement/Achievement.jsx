import "./achievement.css";
import { Chip, Avatar } from "@mui/material";
import Movies from "../../../images/movies.png";

export default function Achievement({ title, score }) {
  const getScoreFromArray = () => {
    const scored = Math.min(...score);
    const answerdTotal = Math.max(...score);
    return `scored ${scored} out of ${answerdTotal}`;
  };

  return (
    <div className="achievement-container">
      <Chip
        className="achievement-chip"
        label={title}
        avatar={<Avatar alt="Natacha" src={Movies} />}
      />
      <p>{getScoreFromArray()}</p>
    </div>
  );
}
