import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    authenticateUser: (state, action) => {
      state.isAuthenticated = true;
    },
    logoutUser: (state, action) => {
      state.isAuthenticated = false;
    },
  },
});

export const { authenticateUser, logoutUser } = sessionSlice.actions;
export default sessionSlice.reducer;
