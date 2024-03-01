import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: {
    usersData: [],
    originalUsersData: [],
  },
  reducers: {
    setUsersData: (state, actions) => {
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

export const { setUsersData, filterUsersData } = users.actions;
export default users.reducer;
