import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    login: (state, actions) => {
      state.userInfo = actions.payload;
    },
    logout: (state, actions) => {
      state.userInfo = {};
    },
  },
});

export const { login, logout } = user.actions;
export default user.reducer;
