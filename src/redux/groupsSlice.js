import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("groups/getusers", async () => {
  const response = await axios.post("http://localhost/users", {
    access_token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTE0ODExODgsImV4cCI6MTc0MzAxNzE4OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJfbmFtZSI6InNlcmthbiIsImZ1bGxuYW1lIjoiYXlkxLFuIiwiRW1haWwiOiJzZXJrYW5AZ21haWwuY29tIn0.I9pZHT9VxaYp_cwPR6DwSDumwOEPHCPz99G7GGpxw3A",
  });
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
      state.users = action.payload;
    });
  },
});

// export const { cleanUp } = groups.actions;
export default groups.reducer;
