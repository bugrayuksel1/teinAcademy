import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
  name: "global",
  initialState: {
    projectName: "Tein Academy",
    countValue: 0,
    isShowRegisterForm: false,
  },
  reducers: {
    changeProjectName: (state) => {
      state.projectName = "proje adı değiştirildi.";
    },
    toggleRegisterForm: (state) => {
      state.isShowRegisterForm = !state.isShowRegisterForm;
    },
  },
});

export const { changeProjectName, toggleRegisterForm } = global.actions;
export default global.reducer;
