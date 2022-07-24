import "./MateCard.css";
import mateAvatar from "../../../images/avatar_img.png";

export default function MateCard() {
  return (
    <div className="mate-card">
      <div className="card-avatar-container">
        <img className="card-avatar-img" src={mateAvatar} alt="mate" />
      </div>
      <div className="card-content">
        <h1>Brain Mate</h1>
        <p>The best in sports question in Tel Aviv!</p>
      </div>
    </div>
  );
}
