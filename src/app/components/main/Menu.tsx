"use client"

import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "../AppContext";
import Button from "../button/Button";

export default function Menu() {
  const {
    state: { displaySidebar },
    setState,
  } = useAppContext();

  return (
    <Button
      icon={LuPanelLeft}
      className={`${displaySidebar ? "hidden" : ""} fixed left-2 top-2`}
      variant="outline"
      onClick={() => {
        setState((v) => {
          return { ...v, displaySidebar: true };
        });
      }}
    />
  );
}
