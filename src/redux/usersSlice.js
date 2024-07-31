import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersData = createAsyncThunk("users/getUsersData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const initialState = {
  usersData: [],
  originalUsersData: [],
  loading: false,
  errorMessage: "",
};

const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsersData: (state, actions) => {
      const tempData = [...state.originalUsersData];
      const filteredData = tempData.filter((e) =>
        e.name.toLowerCase().includes(actions.payload.toLowerCase())
      );
      state.usersData = filteredData;
    },
    cleanUp: (state, actions) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(getUsersData.rejected, (state, actions) => {
      state.errorMessage = "Bir hata oluştu.";
      state.loading = false;
    });
    builder.addCase(getUsersData.fulfilled, (state, actions) => {
      state.usersData = actions.payload;
      state.originalUsersData = actions.payload;
      state.loading = false;
    });
  },
});

export const { filterUsersData, cleanUp } = users.actions;
export default users.reducer;
