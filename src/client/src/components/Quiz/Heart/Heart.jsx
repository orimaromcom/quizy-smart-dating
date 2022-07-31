import style from "./heart.module.scss";

import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import brainmatesConnector from "../../Brainmates/brainmates-connector";

export default function Heart({
  quote,
  fetchNewSuggestionsAction,
  MOCK_USER_ID,
  setHeartClicked,
  heartClicked,
}) {
  let history = useNavigate();
  const heatCLickHandler = () => {
    fetchNewSuggestionsAction(MOCK_USER_ID);
    setHeartClicked(true);

    history.push("/brainmates");
  };

  return !heartClicked ? (
    <div className={style.container}>
      <div className={style.heart_container} onClick={() => heatCLickHandler()}>
        {<div className={style.heart} />}
      </div>

      <div className={style.text}>
        <div className={style.quote}>{quote?.quote}</div>
        <div className={style.author}>{quote?.author}</div>
      </div>
    </div>
  ) : null;
}
