import { createSlice } from "@reduxjs/toolkit";
import { ChatSliceType } from "..";

export const chatSlice = createSlice({
  name: "chat",
  initialState: [],
  reducers: {
    getChat: (state) => {
      return state;
    },
    setChat: (state: ChatSliceType, action) => {
      state.push(action.payload);
    },
  },
});

export const { getChat, setChat } = chatSlice.actions;

export default chatSlice.reducer;
