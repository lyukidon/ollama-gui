import { SearchBox } from "./SearchBox";
import { ChatType } from "../..";
import ChatBubble from "./ChatBubble";

const Chat = ({ chatData }: any) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full h-screen rounded-[30px] justify-end max-w-[960px]">
        <div className="flex flex-col justify-center px-[20px] gap-[20px] overflow-y-auto">
          {chatData.map((chat: ChatType) => (
            <ChatBubble chat={chat} />
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
