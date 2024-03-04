import { combineReducers, configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
import users from "./usersSlice";
import klas from "./classSlice";

const rootReducer = combineReducers({
  global,
  users,
  klas,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
