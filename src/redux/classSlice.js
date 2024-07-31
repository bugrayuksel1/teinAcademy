import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPhotos = createAsyncThunk("klas/getPhotos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return response.data;
});

const klas = createSlice({
  name: "klas",
  initialState: {
    photos: [],
    loading: false,
    errorMessage: "",
  },
  reducers: {
    cleanUp: (state, action) => {
      state.errorMessage = "";
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPhotos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPhotos.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = "Bir hata oluştu.";
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.loading = false;
      state.photos = action.payload;
    });
  },
});

export const { cleanUp } = klas.actions;
export default klas.reducer;
