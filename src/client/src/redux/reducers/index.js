import questionsEntities from "./questions-entities-reducer";
import answersEntities from "./answers-entities-reducer";
import achievementsEntities from "./achievement-entities-reducer";
import brainmatesEntities from "./brainmates-entities-reducer";
import suggestionsEntities from "./suggestions-entities-reducer";
import quizLogicEntities from "./quiz-logic-entities-reducer";
import appView from "./app-view-reducer";
import profileEntity from "./profile-entity-reducer";
import actionTypes from "../actions/constants";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  questionsEntities,
  answersEntities,
  achievementsEntities,
  brainmatesEntities,
  suggestionsEntities,
  appView,
  profileEntity,
  quizLogicEntities,
});
// https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
  if (action.type === actionTypes.USER_LOGOUT) {
    return allReducers(undefined, action);
  }
  return allReducers(state, action);
};
export default rootReducer;
