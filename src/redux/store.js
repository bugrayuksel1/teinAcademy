import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import global from "./globalSlice";
import users from "./usersSlice";
import klas from "./classSlice";
import grades from "./gradesSlice";
import groups from "./groupsSlice";
import user from "./userSlice";
import error from "./errorSlice";
import userlistSlice from "./userlistSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  global,
  users,
  klas,
  grades,
  groups,
  user,
  error,
  userlistSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
