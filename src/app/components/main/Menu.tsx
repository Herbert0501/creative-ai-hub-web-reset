"use client"

import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "../AppContext";
import Button from "../button/Button";
import { ActionType } from "@/reducer/AppReducer";

export default function Menu() {
  const {
    state: { displaySidebar },
    dispatch,
  } = useAppContext();

  return (
    <Button
      icon={LuPanelLeft}
      className={`${displaySidebar ? "hidden" : ""} fixed left-2 top-2`}
      variant="outline"
      onClick={() => {
        dispatch({
          type: ActionType.UPDATE,
          field: "displaySidebar",
          value: true,
        });
      }}
    />
  );
}
