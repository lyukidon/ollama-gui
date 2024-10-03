import { useState } from "react";
import { useDispatch } from "react-redux";
import { setModel } from "../../stores/settingSlice";
import { useSelector } from "react-redux";

const ModelList = ({ list }: any) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const settingState = useSelector((state: any) => state.setting);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.target as HTMLButtonElement;
    dispatch(setModel(name));
    toggleDropdown();
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-system-black bg-opacity-0 rounded-md hover:bg-system-lightgrey focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          id="menu-button"
          onClick={toggleDropdown}
        >
          {settingState.model ? (
            settingState.model
          ) : (
            <span className="text-red-500">"모델을 선택해주세요"</span>
          )}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {list.length !== 0 &&
              list.map((model: any) => {
                return (
                  <button
                    key={model.name}
                    name={model.name}
                    className="w-full px-4 py-2 text-sm text-left text-system-black hover:bg-gray-100"
                    onClick={handleClick}
                  >
                    {model.name}
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelList;
