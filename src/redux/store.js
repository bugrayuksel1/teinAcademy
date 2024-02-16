import { combineReducers, configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";

const rootReducer = combineReducers({
  global,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
