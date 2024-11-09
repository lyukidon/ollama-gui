import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={chat.content}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                // {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={dark}
              />
            ) : (
              <code {...rest}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default ChatBubble;
