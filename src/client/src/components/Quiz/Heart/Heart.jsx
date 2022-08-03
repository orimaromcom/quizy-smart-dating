import style from "./heart.module.scss";
import { useNavigate } from "react-router-dom";

export default function Heart({
  quote,
  fetchNewSuggestionsAction,
  userId,
  suggestionDistance,
  updatePageButtonAction,
  updateSuggestionDistanceAction,
  suggestions,
}) {
  const navigate = useNavigate();
  const HeartCLickHandler = () => {
    updatePageButtonAction("brainmates");

    updateSuggestionDistanceAction("closest");

    navigate("/brainmates");
  };

  return (
    <div className={style.container}>
      <div className={style.heart_container} onClick={() => HeartCLickHandler()}>
        {<div className={style.heart} />}
      </div>
      <div className={style.text}>
        <div className={style.quote}>{quote?.quote}</div>
        <div className={style.author}>{quote?.author}</div>
      </div>
    </div>
  );
}
