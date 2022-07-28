import questionsEntities from "./questions-entities-reducer";
import answersEntities from "./answers-entities-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntities,
  answersEntities,
});

export default allReducers;
