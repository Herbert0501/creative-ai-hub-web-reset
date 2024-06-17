"use client";

import Menubar from "./Menubar";
import { useAppContext } from "../AppContext";

export default function Sidebar() {
  const {
    state: { displaySidebar },
  } = useAppContext();

  return (
    <nav
      className={`${
        displaySidebar ? "" : "hidden"
      } h-full w-60 bg-neutral-50 flex flex-col dark:bg-neutral-900`}
    >
      <Menubar />
    </nav>
  );
}
