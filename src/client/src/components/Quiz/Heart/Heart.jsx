import style from "./heart.module.scss";
import { Button } from "@mui/material";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import brainmatesConnector from "../../Brainmates/brainmates-connector";

export default function Heart({
  quote,
  fetchNewSuggestionsAction,
  MOCK_USER_ID,
  setHeartClicked,
  heartClicked,
}) {
  const navigate = useNavigate();
  const HeartCLickHandler = () => {
    fetchNewSuggestionsAction(MOCK_USER_ID);
    setHeartClicked(true);
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
  /* </Link> */
  /* <Link to="/brainmates" > */
}
