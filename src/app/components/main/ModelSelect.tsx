import React, { use, useRef, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { useAppContext } from "../AppContext";
import { ActionType } from "@/reducer/AppReducer";

interface Model {
  id: string;
  name: string;
}

const modelList: Model[] = [
  { id: "gpt-3.5-turbo", name: "GPT-3.5-TURBO" },
  { id: "gpt-4o", name: "GPT-4o" },
  { id: "gpt-4", name: "GPT-4" },
];

export default function ModelSelect() {
  const [isOpen, setIsOpen] = useState(false); // 状态管理：是否展开选项列表
  const [selectedOption, setSelectedOption] = useState<Model | null>(null); // 明确声明 selectedOption 的类型
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {
    state: { currentModel },
    dispatch,
  } = useAppContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (model: Model) => {
    setSelectedOption(model);
    setIsOpen(false); // 选中后关闭下拉列表
  };

  // 处理焦点事件
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block text-left p-4 w-52">
      <div onBlur={handleBlur} ref={dropdownRef}>
        <span className="rounded-md">
          <button
            type="button"
            className={`inline-flex items-center text-center w-full h-11 rounded-lg px-2 py-2 font-bold 
              text-neutral-500 dark:text-gray-300 hover:bg-zinc-50 dark:hover:bg-[#2F2F2F]
              transition-colors duration-300
              ${
                isOpen
                  ? "bg-zinc-50 dark:bg-[#2F2F2F]"
                  : ""
              }
              `}
            onClick={toggleDropdown}
          >
            {selectedOption ? selectedOption.name : modelList[0].name}
            <PiCaretDownBold className="ml-1" />
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute mt-1 w-52 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5
          bg-white dark:bg-[#2F2F2F]
          "
        >
          <div className="py-1">
            {modelList.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  selectOption(model);
                  dispatch({
                    type: ActionType.UPDATE,
                    field: "currentModel",
                    value: model.id,
                  });
                }}
                className="w-full text-left px-4 py-2 rounded-lg text-sm 
                text-gray-700  dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-[#424242]
                transition-all ease-in-out
                "
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
