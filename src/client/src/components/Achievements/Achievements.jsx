import { useEffect } from "react";

export default function Achievements({ achievements, fetcAchievements }) {
  useEffect(() => {
    if (achievements) {
      console.log(achievements);
    } else {
      fetcAchievements(1);
    }
  }, []);

  return <h1>Achievements</h1>;
}
