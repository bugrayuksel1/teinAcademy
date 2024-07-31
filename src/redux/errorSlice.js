import { createSlice } from "@reduxjs/toolkit";

const error = createSlice({
  name: "error",
  initialState: {
    error: false,
    errorMessage: "",
    errorTitle: "",
  },
  reducers: {
    setError: (state, actions) => {
      state.error = actions.payload.error;
      state.errorMessage = actions.payload.errorMessage;
      state.errorTitle = actions.payload.errorTitle;
    },
    cleanError: (state) => {
      state.error = false;
      state.errorMessage = "";
      state.errorTitle = "";
    },
  },
});

export const { setError, cleanError } = error.actions;
export default error.reducer;
