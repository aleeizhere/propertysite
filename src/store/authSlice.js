import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "", profile: null },
  reducers: {
    setAuth(state, action) {
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
