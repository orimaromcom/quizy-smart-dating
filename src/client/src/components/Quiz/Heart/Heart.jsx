import style from "./heart.module.scss";
import { useNavigate } from "react-router-dom";

export default function Heart({
  updatePageButtonAction,
  updateSuggestionDistanceAction,
  setPlayAgainClicked,
  clearQuestionsArrayAction,
  clearQuestionsIndexAction,
  updateQuoteAction,
}) {
  const navigate = useNavigate();
  const HeartCLickHandler = () => {
    setPlayAgainClicked(true);
    clearQuestionsArrayAction();
    clearQuestionsIndexAction();
    updateQuoteAction();

    updatePageButtonAction("brainmates");

    updateSuggestionDistanceAction("closest");

    navigate("/brainmates");
  };

  return (
    <div className={style.container}>
      <div
        className={style.heart_container}
        onClick={() => HeartCLickHandler()}
      >
        {<div className={style.heart} />}
      </div>
    </div>
  );
}
