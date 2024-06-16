import Button from "@/app/components/button/Button";
import Menubar from "../menu/Menubar";

export default function Sidebar() {
  return (
    <nav className="h-full w-60 bg-neutral-50 flex flex-col dark:bg-neutral-900">
      <Menubar />
    </nav>
  );
}
