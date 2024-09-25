import Markdown from "react-markdown";
import { ChatBoxProps } from "../../props";

const ChatBubble = ({ chat }: ChatBoxProps) => {
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

export default ChatBubble