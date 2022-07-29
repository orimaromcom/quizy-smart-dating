import "./achievements.css";
import { useState } from "react";
import { useEffect } from "react";
import Achievement from "./Achievement/Achievement";

export default function Achievements({ achievements, fetcAchievements }) {
  //temp: we should load globaly
  useEffect(() => {
    if (!achievements.length) fetcAchievements(1);
  }, []);

  return (
    <div className="achievements-container">
      {Object.keys(achievements).map((achievement) => {
        const isCatagory = Array.isArray(achievements[achievement]);
        if (isCatagory) {
          return (
            <Achievement
              title={achievement}
              score={achievements[achievement]}
            />
          );
        }
      })}
    </div>
  );
}
