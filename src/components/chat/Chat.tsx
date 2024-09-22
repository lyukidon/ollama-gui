import React, { ChangeEvent, useState } from "react";

const RequestBox = ({ requestContent }: any) => {
  return (
    <div className="w-full px-[30px] py-[20px] break-words rounded-[20px] rounded-br-[0px] bg-system-darkgrey text-system-white">
      {requestContent}
    </div>
  );
};

const ResponseBox = ({ responseContent }: any) => {
  return (
    <div className="w-full px-[30px] py-[20px] break-words rounded-[20px] rounded-bl-[0px] bg-system-lightgrey">
      {responseContent}
    </div>
  );
};

export const SearchBox = () => {
  const [input, setInput] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <form className="flex flex-row w-[640px] h-[56px] px-[30px] gap-[20px] justify-between items-center bg-system-lightgrey rounded-[30px]">
      <input
        type="text"
        className="w-[500px] h-[2rem] bg-system-lightgrey"
        placeholder="대화를 입력하세요."
        onChange={handleInput}
      />
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </form>
  );
};

const Chat = ({ chatData } : any) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full h-screen rounded-[30px] justify-end max-w-[960px]">
        <div className="flex flex-col justify-center px-[20px] gap-[20px] overflow-y-auto">
          {chatData.map((chat: any) => {
            return !chat.created_at ? (
              <RequestBox requestContent={chat.content} />
            ) : (
              <ResponseBox responseContent={chat.message.content} />
            );
          })}
        </div>
        <div className="flex justify-center py-[10px]">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Chat;
