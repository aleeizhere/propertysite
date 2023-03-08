import { createSlice } from "@reduxjs/toolkit";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: { available: [], funded: [] },
  reducers: {
    setProperties(state, action) {
      state.available = action.payload.available;
      state.funded = action.payload.funded;
    },
  },
});

export const propertiesActions = propertiesSlice.actions;
export default propertiesSlice;
