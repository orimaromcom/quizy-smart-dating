import questionsEntities from "./questions-entities-reducer";
import answersEntities from "./answers-entities-reducer";
import achievementsEntities from "./achievement-entities-reducer";
import brainmatesEntities from "./brainmates-entities-reducer";
import profileEntity from "./profile-entity-reducer";
import user from "./user-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntities,
  answersEntities,
  achievementsEntities,
  brainmatesEntities,
  user,
  profileEntity,
});

export default allReducers;
