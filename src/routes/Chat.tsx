import ChatComponent from "../components/chat/Chat";
import ListComponent from "../components/list/List";

const Chat = () => {
  return (
    <div className="flex flex-row">
      <ListComponent />
      <ChatComponent />
    </div>
  );
}

export default Chat;