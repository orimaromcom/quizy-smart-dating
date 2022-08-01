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
    }
  }, [navigate, userId]);

  useEffect(() => {
    fetchAchievementsAction(userId);
  }, [fetchAchievementsAction, userId]);

  const categories = Object.keys(achievements);
  if (Object.keys(achievements).length > 0) {
    return (
      <div className="achievements-container">
        {Object.keys(achievements).map((achievement) => {
          return (
            <Achievement
              title={achievement}
              score={achievements[achievement]}
            />
          );
        })}
      </div>
    );
  }
}
