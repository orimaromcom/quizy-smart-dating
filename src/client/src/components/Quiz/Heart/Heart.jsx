import style from "./heart.module.scss";
import { useNavigate } from "react-router-dom";

export default function Heart({
  updatePageButtonAction,
  updateSuggestionsOrBrainmatesAction,
  setPlayAgainClicked,
  clearQuestionsArrayAction,
  clearQuestionsIndexAction,
  updateQuoteAction,
  quote,
}) {
  const navigate = useNavigate();
  const HeartCLickHandler = () => {
    setPlayAgainClicked(true);
    clearQuestionsArrayAction();
    clearQuestionsIndexAction();
    updateQuoteAction();

    updatePageButtonAction("brainmates");

    updateSuggestionsOrBrainmatesAction("closest");

    navigate("/brainmates");
  };

  return (
    <div className={style.container}>
      <h1 className={style.text}>
        Press the big heart to see if there are new suggestions for you!
      </h1>
      <div
        className={style.heart_container}
        onClick={() => HeartCLickHandler()}
      >
        {<div className={style.heart} />}
      </div>
      <div className={style.text}>
        <div className={style.quote}>{quote?.quote}</div>
        <div className={style.author}>{quote?.author}</div>
      </div>
    </div>
  );
}
