"use client";

import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "../AppContext";
import Button from "../button/Button";
import { ActionType } from "@/reducer/AppReducer";
import ModelSelect from "./ModelSelect";

export default function Menu() {
  const {
    state: { displaySidebar },
    dispatch,
  } = useAppContext();

  return (
    <div className="sticky flex w-full top-0 bg-white dark:bg-neutral-800">
      <Button
        icon={LuPanelLeft}
        className={`${displaySidebar ? "hidden" : ""} h-10 ml-4 mt-2 `}
        variant="outline"
        onClick={() => {
          dispatch({
            type: ActionType.UPDATE,
            field: "displaySidebar",
            value: true,
          });
        }}
      />
      <ModelSelect />
    </div>
  );
}
