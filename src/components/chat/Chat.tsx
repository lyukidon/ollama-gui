import { useEffect, useRef } from "react";
import { ChatType } from "../..";
import ChatBubble from "./ChatBubble";
import { useSelector } from "react-redux";
import {scrollFunc} from "./utils"

const Chat = ({ chatData }: any) => {
  const chatState = useSelector((state: any) => state.chat)
  const isFirstRender = useRef(true)
  // 첫 랜더링 시, 맨 아래
  // 다음부터는 스크롤 위치 최하단의 경우에만 하단 스크롤
  useEffect(()=>{
    scrollFunc(isFirstRender);
  },[chatState])

  return (
    <div className="
      w-[80%] min-w-[680px] h-[100vh-90px] px-[20px] pt-[20px] pb-[90px]
      flex flex-col gap-[20px]
    ">
      {chatData.map((chat: ChatType) => (
        <ChatBubble chat={chat} />
      ))}
    </div>
  );
};

export default Chat;
