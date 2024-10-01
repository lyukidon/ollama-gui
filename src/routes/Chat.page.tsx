import { useSelector } from "react-redux";
import Chat from "../components/chat/Chat";
import { SearchBox } from "../components/chat/SearchBox";

const ChatPage = () => {
  const chatData = useSelector((state: any) => state.chat);

  return (
    <div className="flex flex-col items-center">
      <Chat chatData={chatData} />
      <SearchBox />
    </div>
  );
}

export default ChatPage;