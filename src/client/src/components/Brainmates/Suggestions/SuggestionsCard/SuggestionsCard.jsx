import "./suggestions-card.css";

export default function SuggestionsCard({
  userName,
  bestResult,
  age,
  amountOfSamePersonalAnswers,
  picture,
}) {
  return (
    <div className={`suggestion-card `}>
      <div className="suggestion-card-content">
        <div className="suggestion-card-avatar-container">
          <img className="suggestion-card-avatar-img" src={picture} alt="mate" />
        </div>
        <h1>{`${userName}`}</h1>
        <h1>{`${age} y/o`}</h1>
        <p>{bestResult}</p>
        <p>{`${amountOfSamePersonalAnswers} similar personal answers`}</p>
      </div>
    </div>
  );
}
