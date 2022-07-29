import "./achievements.css";
import { useState } from "react";
import { useEffect } from "react";
import Achievement from "./Achievement/Achievement";

export default function Achievements({ achievements, fetcAchievements }) {
  //temp: we should load globaly
  useEffect(() => {
    console.log(achievements);
    if (!achievements) fetcAchievements(1);
  }, []);

  return (
    <div className="achievements-container">
      {/* {Object.keys(achievements).map((achievement) => (
        <Achievement title={"movies"} score={"1/9"} />
      ))} */}
      {[1, 2, 3, 4, 5, 6].map((achievement, i) => (
        <Achievement title={"movies"} key={i} score={"1/9"} />
      ))}
    </div>
  );
}
