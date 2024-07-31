import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("groups/getusers", async () => {
  const response = await axios.post("http://localhost/users");
  return response.data;
});

const groups = createSlice({
  name: "groups",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      // state.users = action.payload;
    });
  },
});

// export const { cleanUp } = groups.actions;
export default groups.reducer;
