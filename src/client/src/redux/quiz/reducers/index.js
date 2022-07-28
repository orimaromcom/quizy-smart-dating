import questionsEntities from "./questions-entities-reducer";
import { combineReducers } from "redux";

const allQuizReducers = combineReducers({
  questionsEntities,
});

export default allQuizReducers;
