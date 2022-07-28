import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import allQuizReducers from "./quiz/reducers";
import allAchievementsReducers from "./achievements/reducers";

const logger = (store) => (next) => (action) => {
  console.log("Dispatching", action);
  let result = next(action);
  console.log("Next state", store.getState());
  return result;
};

const allReducers = combineReducers({
  allQuizReducers,
  allAchievementsReducers,
});

export const store = configureStore({
  reducer: allReducers,
  middleware: [thunkMiddleware, logger],
  preloadedState: {},
});
