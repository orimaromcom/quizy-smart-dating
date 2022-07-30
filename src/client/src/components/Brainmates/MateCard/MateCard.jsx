import "./MateCard.css";
import mateAvatar from "../../../images/avatar_img.png";
import { useState } from "react";

export default function MateCard({
  status,
  imgSrc,
  userName,
  achievements,
  phoneNumber,
  age,
  location,
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
      <div className="card-avatar-container">
        <img
          className="card-avatar-img"
          src={status === "match" ? imgSrc : mateAvatar}
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
      className={`mate-card match open `}
      color={"secondary"}
      onClick={() => {
        setReveal(false);
      }}
    >
      <div className="card-avatar-container">
        <img className="card-avatar-img" src={imgSrc} alt="mate" />
      </div>
      <div className="card-content">
        <h1>{userName}</h1>
        <h2>{age} y/o</h2>
        <h2> from {location}</h2>
        <h3>{phoneNumber}</h3>
      </div>
    </div>
  );

  return reveal ? renderCardBack() : renderCardFront();
}
