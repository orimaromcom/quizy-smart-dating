import "./achievements.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Achievement from "./Achievement/Achievement";

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
    if (userId)
    fetchAchievementsAction(userId);
  }, [fetchAchievementsAction, userId]);

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
