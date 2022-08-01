import "./achievement.css";
import { Chip, Avatar } from "@mui/material";
import Movies from "../../../images/movies.png";

export default function Achievement({ title, score }) {
  return (
    <div className="achievement-container">
      <Chip
        className="achievement-chip"
        label={title}
        avatar={<Avatar alt="film" src={Movies} />}
      />
      <p>{score.correct} out of {score.answers}</p>
    </div>
  );
}
