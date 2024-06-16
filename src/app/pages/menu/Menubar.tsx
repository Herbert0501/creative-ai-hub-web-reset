import Button from "@/app/components/button/Button";
import { HiPlus } from "react-icons/hi";
import { LuPanelLeft } from "react-icons/lu";

export default function Menubar() {
  return (
    <div className="flex space-x-3 ml-2 mr-2">
      <Button icon={HiPlus} variant="outline" className="flex-1">
        新建对话
      </Button>
      <Button icon={LuPanelLeft} variant="outline" />
    </div>
  );
}
