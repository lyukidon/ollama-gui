import { useEffect, useRef } from "react";
import { ChatType } from "../..";
import ChatBubble from "./ChatBubble";
import { useSelector } from "react-redux";

const Chat = ({ chatData }: any) => {
  const chatState = useSelector((state: any) => state.chat)
  const isFirstRender = useRef(true)
  // 첫 랜더링 시, 채팅이 추가되는 경우
  useEffect(()=>{
    if (isFirstRender){
      isFirstRender.current = false;
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }else{

    }
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
