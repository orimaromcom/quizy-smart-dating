import "./MateCard.css";
import mateAvatar from "../../../images/avatar_img.png";

export default function MateCard({ status, img, userName }) {
  return (
    <div className="mate-card">
      <div className="card-avatar-container">
        <img
          className="card-avatar-img"
          src={status === "match" ? img : mateAvatar}
          alt="mate"
        />
      </div>
      <div className="card-content">
        <h1>{userName}</h1>
        <p>The best in sports question in Tel Aviv!</p>
      </div>
    </div>
  );
}
