import achievements from "./achievements-reducer";
import { combineReducers } from "redux";

const allAchievementsReducers = combineReducers({
  achievements,
});

export default allAchievementsReducers;
