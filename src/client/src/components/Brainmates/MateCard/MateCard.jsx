import "./MateCard.css";
import { useState } from "react";
import { getAvatarByGender } from "../get-avatar-by-gender";

export default function MateCard({
  status,
  imgSrc,
  userName,
  achievements,
  phoneNumber,
  age,
  location,
  gender,
}) {
  const [reveal, setReveal] = useState(false);
  const renderCardFront = () => (
    <div
      className={`mate-card ` + status}
      onClick={
        status === "match"
          ? () => {
              setReveal(true);
            }
          : null
      }
    >
      {status === "match" ? <div className="match-tag">MATCH</div> : null}
      <div className="card-avatar-container">
        <img
          className="card-avatar-img"
          src={status === "match" ? imgSrc : getAvatarByGender(gender)}
          alt="mate"
        />
      </div>
      <div className="card-content">
        <h1>{userName}</h1>
        <p>{achievements}!</p>
      </div>
    </div>
  );

  const renderCardBack = () => (
    <div
      className={`mate-card match open`}
      color={"secondary"}
      onClick={() => {
        setReveal(false);
      }}
    >
      {status === "match" ? <div className="match-tag">MATCH</div> : null}
      <div className="card-avatar-container">
        <img className="card-avatar-img" src={imgSrc} alt="mate" />
      </div>
      <div className="card-content">
        <h1>{userName}</h1>
        <h2>
          <span>{age}</span> Years Old
        </h2>
        <h2>
          from <span>{location}</span>
        </h2>
        <h3>
          <span>{phoneNumber}</span>
        </h3>
      </div>
    </div>
  );

  return reveal ? renderCardBack() : renderCardFront();
}
