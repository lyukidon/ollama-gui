import React from "react";

const QuestionBox = () => {
  return (
    <div className="w-full px-[30px] py-[20px] break-words rounded-[20px] bg-system-darkgrey text-system-white">
      질문 박스
    </div>
  );
};

const ChatBox = () => {
  return (
    <div className="w-full px-[30px] py-[20px] break-words rounded-[20px] bg-system-lightgrey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id leo commodo, pretium purus
      eu, vestibulum augue. Phasellus posuere porttitor nulla non dapibus. Phasellus imperdiet justo
      eu arcu laoreet, nec luctus libero scelerisque. Ut mollis diam non aliquam congue. Aliquam
      finibus gravida quam, at aliquet ligula pretium non. Pellentesque sodales eget arcu in rutrum.
      Nulla bibendum, lectus quis semper egestas, mauris urna pharetra lacus, non pulvinar justo
      libero sit amet dui.
    </div>
  );
};

export const SearchBox = () => {
  return (
    <div className="flex flex-row w-[640px] h-[56px] px-[30px] gap-[20px] justify-between items-center bg-system-lightgrey rounded-[30px]">
      <input
        type="text"
        className="w-[500px] h-[2rem] bg-system-lightgrey"
        placeholder="대화를 입력하세요."
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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

const Chat = () => {
  return (
    <div className="flex flex-col w-full h-screen rounded-[30px] justify-end">
      <div className="flex flex-col justify-center px-[20px] gap-[20px]">
        <QuestionBox />
        <ChatBox />
        <QuestionBox />
        <ChatBox />
      </div>
      <div className="flex justify-center py-[10px]">
        <SearchBox />
      </div>
    </div>
  );
};

export default Chat;
