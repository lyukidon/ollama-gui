import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    model: ""
  },
  reducers: {
    getSetting: (state) => {
      return state;
    },
    setModel: (state, action) => {
      state.model = action.payload
    }
  },
});

export const { getSetting, setModel } = settingSlice.actions;

export default settingSlice.reducer;
