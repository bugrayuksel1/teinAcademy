import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: {
    usersData: [],
  },
  reducers: {
    setUsersData: (state, actions) => {
      const filteredData = actions.payload.filter(
        (item) => item.name === "Mrs. Dennis Schulist"
      );
      state.usersData = filteredData;
    },
  },
});

export const { setUsersData } = users.actions;
export default users.reducer;
