"use client";

import Menubar from "./Menubar";
import { useAppContext } from "../AppContext";
import Toolbar from "./Toolbar";
import ChatList from "./ChatList";

export default function Sidebar() {
  const {
    state: { displaySidebar },
  } = useAppContext();

  return (
    <nav
      className={`${
        displaySidebar ? "" : "hidden"
      } flex flex-col relative h-full w-60 flex flex-col bg-neutral-50 dark:bg-neutral-900`}
    >
      <Menubar />
      <ChatList />
      <Toolbar />
    </nav>
  );
}
