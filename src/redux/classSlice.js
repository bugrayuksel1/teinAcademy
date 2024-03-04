import { createSlice } from "@reduxjs/toolkit";

const klas = createSlice({
  name: "klas",
  initialState: {
    photos: [],
  },
  reducers: {
    setPhotos: (state, actions) => {
      state.photos = actions.payload;
    },
  },
});

export const { setPhotos } = klas.actions;
export default klas.reducer;
