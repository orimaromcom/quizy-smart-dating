import questionsEntities from "./questions-entities-reducer";
import answersEntities from "./answers-entities-reducer";
import achievementsEntities from "./achievement-entities-reducer";
import brainmatesEntities from "./brainmates-entities-reducer";
import suggestionsEntities from "./suggestions-entities-reducer.js"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntities,
  answersEntities,
  achievementsEntities,
  brainmatesEntities,
  suggestionsEntities,
});

export default allReducers;
