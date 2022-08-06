import { useNavigate } from "react-router-dom";
import style from "./heart.module.scss";

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

 <svg id={style.heart_button} onClick={() => HeartCLickHandler()}
        className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium heart-icon css-u42cxr-MuiSvgIcon-root"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          className="heart"
          d="M32 56.9333L28.1333 53.4133C14.4 40.96 5.33333 32.7467 5.33333 22.6667C5.33333 14.4533 11.7867 8 20 8C24.64 8 29.0933 10.16 32 13.5733C34.9067 10.16 39.36 8 44 8C52.2133 8 58.6667 14.4533 58.6667 22.6667C58.6667 32.7467 49.6 40.96 35.8667 53.44L32 56.9333Z"
        />
        <path
          d="M31.9167 13L29 20.1628L34 24.7674L29.8333 31.9302L34 36.0233L29.8333 43.6977L34 47.7907L31.9167 57"
        />
      </svg>
      <div className={style.quote}>{quote?.quote}</div>
      <div className={style.author}>{quote?.author}</div>

    </div>
  );
}
