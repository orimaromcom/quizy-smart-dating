import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Achievement from "./Achievement/Achievement";
import "./achievements.css";

export default function Achievements({
  achievements,
  fetchAchievementsAction,
  userId,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }
  }, [navigate, userId]);

  useEffect(() => {
    if (!Object.keys(achievements).length && userId)
      fetchAchievementsAction(userId);
  }, [userId, achievements]);

  if (Object.keys(achievements).length > 0) {
    return (
      <div className="achievements-container">
        {Object.keys(achievements).map((achievement) => {
          return (
            <Achievement
              key={achievement}
              title={achievement}
              score={achievements[achievement]}
            />
          );
        })}
      </div>
    );
  }
}
