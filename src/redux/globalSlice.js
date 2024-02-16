import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
  name: "global",
  initialState: {
    projectName: "Tein Academy",
    countValue: 0,
  },
  reducers: {
    incremented: (state) => {
      state.countValue += 1;
    },
    decremented: (state) => {
      state.countValue -= 1;
    },
    sifirla: (state) => {
      state.countValue = 0;
    },
  },
});

export const { incremented, decremented, sifirla } = global.actions;
export default global.reducer;
