import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import allQuizReducers from "./quiz/reducers";

const logger = (store) => (next) => (action) => {
  console.log("Dispatching", action);
  let result = next(action);
  console.log("Next state", store.getState());
  return result;
};

export const store = configureStore({
  reducer: allQuizReducers,
  middleware: [thunkMiddleware, logger],
  preloadedState: {},
});
