import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
  originalUsersData: [],
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, actions) => {
      state.usersData = actions.payload;
      state.originalUsersData = actions.payload;
    },

    filterUsersData: (state, actions) => {
      const tempData = [...state.originalUsersData];
      const filteredData = tempData.filter((e) =>
        e.name.toLowerCase().includes(actions.payload.toLowerCase())
      );
      state.usersData = filteredData;
    },
  },
});

export const { filterUsersData, setUserData } = users.actions;
export default users.reducer;
