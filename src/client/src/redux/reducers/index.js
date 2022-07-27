import questionsEntities from "./questions-entities-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntities,
});

export default allReducers;
