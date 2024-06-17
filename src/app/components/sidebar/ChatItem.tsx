import { useState, useRef, useEffect } from "react";
import { Chat } from "@/types/chat";
import { PiChatBold, PiDotsThreeBold } from "react-icons/pi";

type Props = {
  item: Chat;
  selected: boolean;
  onSelected: (chat: Chat) => void;
};

export default function ChatItem({ item, selected, onSelected }: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  const toggleOptions = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowOptions(!showOptions);
  };

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation();
    // 编辑逻辑
    console.log("Edit:", item);
  };

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    // 删除逻辑
    console.log("Delete:", item);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <li
      onClick={() => onSelected(item)}
      key={item.id}
      title={item.title}
      className={`relative group flex items-center mt-0 mr-3 gap-2 p-4 rounded-md cursor-pointer 
    ${
      selected
        ? "pr-7 bg-neutral-200 dark:bg-neutral-800"
        : "hover:pr-7 bg-gray-50 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    }
    subpixel-antialiased font-medium text-sm text-black dark:text-gray-300
  `}
    >
      <div className="h-full">
        <PiChatBold />
      </div>
      <div className="relative flex-1 whitespace-nowrap overflow-hidden">
        {item.title}
        <span
          className={`absolute right-0 inset-y-0 w-8 bg-gradient-to-l pointer-events-none
    ${
      selected
        ? "from-gray-200 dark:from-neutral-800"
        : "from-neutral-50 dark:from-neutral-900 group-hover:from-gray-200 dark:group-hover:from-neutral-800"
    }
    `}
        ></span>
      </div>

      <div
        title="选项"
        className={`absolute right-1 flex h-full 
          ${selected ? "flex" : "group-hover:flex hidden"} 
          transalation-all duration-300 ease-in-out`}
      >
        <button className="p-1 text-xl" onClick={toggleOptions}>
          <PiDotsThreeBold />
        </button>

        {/* 编辑和删除按钮区域 */}
        {showOptions && (
          <div
            ref={optionsRef}
            className="z-10 absolute right-0 w-12 mt-10 flex flex-col bg-white shadow-md rounded-md 
            "
          >
            <button
              className="p-2 text-sm text-gray-600 hover:text-black"
              onClick={handleEdit}
            >
              编辑
            </button>
            <button
              className="p-2 text-sm text-gray-600 hover:text-black"
              onClick={handleDelete}
            >
              删除
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
