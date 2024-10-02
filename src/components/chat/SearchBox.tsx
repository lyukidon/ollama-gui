import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SearchInputType } from "../..";
import { generateChatCompletion } from "../../utils/api";
import { setChat } from "../../stores/chatSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchInputType>();
  const { ref } = register("search");

  const onSubmit: SubmitHandler<SearchInputType> = async (data) => {
    setLoading(true);

    const content = data.search;

    const response = await generateChatCompletion(content)

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    dispatch(setChat({ role: "user", content }));
    dispatch(setChat(response.message));

    setLoading(false);
  };

  const handleKeyPress = (event: any) => {
    console.log(event.key)
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(onSubmit)()
    }
};

  return (
    <div className="
      w-screen py-[10px]
      fixed bottom-0 left-0
      flex flex-col justify-center items-center
      bg-system-white
    ">
      {loading && <div>로딩 중...</div>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row gap-[20px] justify-between items-center
        w-[640px] min-h-[56px] max-h-[200px] px-[30px] 
        bg-system-lightgrey rounded-[30px]"
      >
        <div>
          {errors.search && <span className="text-red-500">빈 내용은 전달할 수 없습니다.</span>}
        </div>
        <textarea
          className="w-[500px] h-[2rem] bg-system-lightgrey"
          placeholder="대화를 입력하세요."
          onKeyDown={handleKeyPress}
          {...register("search", { required: true })}
          ref={(e) => {
            ref(e);
            inputRef.current = e;
          }}
        />
        <button type="submit">
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
        </button>
      </form>
    </div>
  );
};
