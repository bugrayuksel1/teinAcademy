import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("grades/getPost", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/postss"
  );
  return response.data;
});

export const getDetail = createAsyncThunk(
  "grades/getDetail",
  async ({ id }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  }
);

export const getDetailComments = createAsyncThunk(
  "grades/getDetailComments",
  async ({ id }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response.data;
  }
);

const grades = createSlice({
  name: "grades",
  initialState: {
    postData: [],
    postDataLoading: false,
    postDataError: "",
    detailData: {},
    detailDataLoading: false,
    detailDataError: "",
    commentData: [],
    commentDataLoading: false,
    commentDataError: "",
  },
  reducers: {
    cleanUp: (state, action) => {
      state.postDataLoading = false;
      state.postDataError = "";
      state.detailDataLoading = false;
      state.detailDataError = "";
      state.commentDataLoading = false;
      state.commentDataError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.postDataLoading = true;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.postDataLoading = false;
      state.postDataError = "Bir Hata Oluştu.";
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.postDataLoading = false;
      state.postData = action.payload;
    });
    builder.addCase(getDetail.pending, (state, action) => {
      state.detailDataLoading = true;
    });
    builder.addCase(getDetail.rejected, (state, action) => {
      state.detailDataLoading = false;
      state.detailDataError = "Bir Hata Oluştu.";
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      state.detailDataLoading = false;
      state.detailData = action.payload;
    });
    builder.addCase(getDetailComments.pending, (state, action) => {
      state.commentDataLoading = true;
    });
    builder.addCase(getDetailComments.rejected, (state, action) => {
      state.commentDataLoading = false;
      state.commentDataError = "Bir hata oluştu.";
    });
    builder.addCase(getDetailComments.fulfilled, (state, action) => {
      state.commentDataLoading = false;
      state.commentData = action.payload;
    });
  },
});

export const { cleanUp } = grades.actions;
export default grades.reducer;
