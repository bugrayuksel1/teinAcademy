import { combineReducers, configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
import users from "./usersSlice";

const rootReducer = combineReducers({
  global,
  users,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
