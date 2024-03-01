import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
  name: "global",
  initialState: {
    projectName: "Tein Academy",
    countValue: 0,
  },
  reducers: {
    changeProjectName: (state) => {
      state.projectName = "proje adı değiştirildi.";
    },
  },
});

export const { changeProjectName } = global.actions;
export default global.reducer;
