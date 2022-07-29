import "./achievement.css";
import { Chip, Avatar } from "@mui/material";
import Movies from "../../../images/movies.png";

export default function Achievement({ title, score }) {
  return (
    <div className="achievement-container">
      <Chip
        className="achievement-chip"
        label={title}
        avatar={<Avatar alt="Natacha" src={Movies} />}
      />
      <p>{score}</p>
    </div>
  );
}
