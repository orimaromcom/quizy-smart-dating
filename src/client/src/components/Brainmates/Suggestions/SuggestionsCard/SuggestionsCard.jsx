import "./suggestions-card.css";
import { getAvatarByGender } from "../../get-avatar-by-gender";

export default function SuggestionsCard({
  userName,
  bestResult,
  age,
  amountOfSamePersonalAnswers,
  gender,
}) {
  return (
    <div className={`suggestion-card`}>
      <div className="suggestion-card-content">
        <div className="card-top">
          <div className="suggestion-card-avatar-container">
            <img
              className="suggestion-card-avatar-img"
              src={getAvatarByGender(gender)}
              alt="mate"
            />
          </div>
          <h1>{`${userName}`}</h1>
          <h2>{`${age} y/o`}</h2>
        </div>
        <div className="mate-achievement">
          <span>
            <p>🏆</p>
            <p>{bestResult}</p>
          </span>
          <span>
            <p>💛</p>
            <p>{`${amountOfSamePersonalAnswers} similar personal answers`}</p>
          </span>
        </div>
      </div>
    </div>
  );
}
