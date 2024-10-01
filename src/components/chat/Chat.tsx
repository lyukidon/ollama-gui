import { ChatType } from "../..";
import ChatBubble from "./ChatBubble";

const Chat = ({ chatData }: any) => {
  return (
    <div className="
      w-[80%] h-[100vh-90px] px-[20px] pt-[20px] pb-[90px]
      flex flex-col gap-[20px]
    ">
      {chatData.map((chat: ChatType) => (
        <ChatBubble chat={chat} />
      ))}
    </div>
  );
};

export default Chat;
