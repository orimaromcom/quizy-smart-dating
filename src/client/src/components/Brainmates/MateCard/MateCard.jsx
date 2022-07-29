import "./MateCard.css";
import mateAvatar from "../../../images/avatar_img.png";

export default function MateCard({ status, imgSrc, userName, achievements }) {
  // <Badge badgeContent={100} color="secondary">
  //   <MailIcon />
  // </Badge>

  return (
    <div className={`mate-card ` + status}>
      {status === "match" ? <span>Match!</span> : null}
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
}
