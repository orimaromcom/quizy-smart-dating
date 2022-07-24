import questionsEntitiesReducer from "./questions-entities-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntitiesReducer,
});

export default allReducers;
