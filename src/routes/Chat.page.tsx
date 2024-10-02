import { useSelector } from "react-redux";
import Chat from "../components/chat/Chat";
import { SearchBox } from "../components/chat/SearchBox";
import StatusBar from "../components/statusBar/StatusBar";

const ChatPage = () => {
  const chatData = useSelector((state: any) => state.chat);

  return (
    <div className="flex flex-col items-center">
      <StatusBar />
      <Chat chatData={chatData} />
      <SearchBox />
    </div>
  );
}

export default ChatPage;