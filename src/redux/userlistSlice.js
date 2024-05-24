import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk("users/getUserList", async () => {
  const response = await axios.post("http://localhost/userlist");
  return response.data;
});

const userlist = createSlice({
  name: "userlist",
  initialState: {
    userList: [],
    errorUserList: "",
    userListLoading: false,
  },
  reducers: {
    cleanUserList: (state) => {
      state.userList = [];
      state.errorUserList = "";
      state.userListLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserList.pending, (state, actions) => {
      state.userListLoading = true;
    });
    builder.addCase(getUserList.rejected, (state, actions) => {
      state.errorUserList = "Bir hata oluştu.";
      state.userListLoading = false;
    });
    builder.addCase(getUserList.fulfilled, (state, actions) => {
      state.userList = actions.payload;
      state.userListLoading = false;
    });
  },
});

export const { cleanUserList } = userlist.actions;
export default userlist.reducer;
