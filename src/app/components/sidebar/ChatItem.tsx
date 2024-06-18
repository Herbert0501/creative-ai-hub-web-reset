import { useState, useRef, useEffect } from "react";
import { Chat } from "@/types/chat";
import { PiChatBold, PiNotePencil, PiTrash } from "react-icons/pi";
import { MdCheck, MdClose } from "react-icons/md";

type Props = {
  item: Chat;
  selected: boolean;
  onSelected: (chat: Chat) => void;
};

export default function ChatItem({ item, selected, onSelected }: Props) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    setEditing(false);
    setDeleting(false);
  }, [selected]);

  return (
    <li
      onClick={() => onSelected(item)}
      key={item.id}
      title={item.title}
      className={`relative group flex items-center mt-0 mr-3 gap-2 p-4 rounded-md cursor-pointer 
    ${
      selected
        ? "pr-12 bg-neutral-200 dark:bg-neutral-800"
        : "hover:pr-7 bg-gray-50 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    }
    subpixel-antialiased font-medium text-sm text-black dark:text-gray-300
  `}
    >
      <div className="h-full text-base">
        {deleting ? <PiTrash /> : editing ? <PiNotePencil /> : <PiChatBold />}
      </div>

      {editing && (
        <input
          autoFocus={true}
          type="text"
          className="min-w-0 bg-transparent outline-none"
          defaultValue={item.title}
        />
      )}

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
          `}
      >
        {editing || deleting ? (
          <>
            <button
              onClick={(e) => {
                if (deleting) {
                  console.log("delete", item.id);
                } else {
                  console.log("edit", item.id);
                }
                setDeleting(false);
                setEditing(false);
                e.stopPropagation();
              }}
              className="p-1 text-base"
            >
              <MdCheck />
            </button>
            <button
              onClick={(e) => {
                setDeleting(false);
                setEditing(false);
                e.stopPropagation();
              }}
              className="p-1 text-base"
            >
              <MdClose />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={(e) => {
                setEditing(true);
                e.stopPropagation();
              }}
              className={`p-1 text-base 
                ${selected ? "" : "group-hover:hidden"}
                `}
            >
              <PiNotePencil />
            </button>
            <button
              onClick={(e) => {
                setDeleting(true);
                e.stopPropagation();
              }}
              className="p-1 text-base"
            >
              <PiTrash />
            </button>
          </>
        )}
      </div>
    </li>
  );
}
