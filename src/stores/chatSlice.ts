import { createSlice } from "@reduxjs/toolkit";
import { ChatSliceType } from "..";
import {sample} from '../../__mock__/chat.mock'

export const chatSlice = createSlice({
  name: "chat",
  initialState: [...sample],
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
