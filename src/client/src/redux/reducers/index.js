import questionsEntities from "./questions-entities-reducer";
import answersEntities from "./answers-entities-reducer";
import achievementsEntities from "./achievement-entities-reducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntities,
  answersEntities,
  achievementsEntities,
});

export default allReducers;
