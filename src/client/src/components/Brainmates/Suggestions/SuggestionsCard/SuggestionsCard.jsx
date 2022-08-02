import "./suggestions-card.css";
import { useState } from "react";

export default function SuggestionsCard({
  userName,
  bestResult,
  age,
  amountOfSamePersonalAnswers,
  suggestions = { suggestions },
  picture,
}) {
  return (
    <div className={`mate-card ` }>
      <div className="card-avatar-container">
        <img className="card-avatar-img" src={picture} alt="mate" />
      </div>
      <div className="card-content">
        <h1>{`Name : ${userName}`}</h1>
        <h1>{`Age : ${age}`}</h1>
        <p>{bestResult}</p>
        <p>{`${amountOfSamePersonalAnswers} similar personal answers`}</p>
      </div>
    </div>
  );

  
}
