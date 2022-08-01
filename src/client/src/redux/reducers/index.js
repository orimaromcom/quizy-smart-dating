import questionsEntities from "./questions-entities-reducer";
import answersEntities from "./answers-entities-reducer";
import achievementsEntities from "./achievement-entities-reducer";
import brainmatesEntities from "./brainmates-entities-reducer";
import suggestionsEntities from "./suggestions-entities-reducer"
import appView from "./app-view-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntities,
  answersEntities,
  achievementsEntities,
  brainmatesEntities,
  suggestionsEntities,
  appView,
});

export default allReducers;
