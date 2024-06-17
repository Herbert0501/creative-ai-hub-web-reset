"use client";

import Sidebar from "@/app/components/sidebar/Sidebar";
import Main from "@/app/components/main/Main";
import { useAppContext } from "@/app/components/AppContext";

export default function Home() {
  const {state: {themeMode}} = useAppContext();

  return (
    <div className={`${themeMode} h-full flex`}>
      <Sidebar />
      <Main />
    </div>
  );
}
