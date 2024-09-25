import React, { ChangeEvent, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChatRequestType, ChatResponseType, ChatSliceType, ChatType, SearchInputType } from "../..";
import { Ollama } from "ollama";
import { useDispatch } from "react-redux";
import { setChat } from "../../stores/chatSlice";
import Markdown from "react-markdown";
import { ChatBoxProps, SearchBoxProps } from "../../props";
import { SearchBox } from "./SearchBox";

const ChatBox = ({ chat }: ChatBoxProps) => {
  return (
    <div
      className={`flex flex-col gap-[15px] w-full px-[30px] py-[20px] break-words rounded-[20px] 
    ${
      chat.role === "user"
        ? "rounded-br-[0px] bg-system-darkgrey text-system-white"
        : "rounded-bl-[0px] bg-system-lightgrey"
    }`}
    >
      <Markdown>{chat.content}</Markdown>
    </div>
  );
};

const Chat = ({ chatData }: any) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full h-screen rounded-[30px] justify-end max-w-[960px]">
        <div className="flex flex-col justify-center px-[20px] gap-[20px] overflow-y-auto">
          {chatData.map((chat: ChatType) => (
            <ChatBox chat={chat} />
          ))}
        </div>
        <div className="flex justify-center py-[10px]">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Chat;
