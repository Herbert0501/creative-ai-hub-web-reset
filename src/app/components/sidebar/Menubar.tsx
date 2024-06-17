import Button from "@/app/components/button/Button";
import { HiPlus } from "react-icons/hi";
import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "../AppContext";

export default function Menubar() {
  const { setState } = useAppContext();

  return (
    <div className="flex space-x-3 ml-2 mr-2">
      <Button icon={HiPlus} variant="outline" className="flex-1">
        新建对话
      </Button>
      
      <Button
        icon={LuPanelLeft}
        variant="outline"
        onClick={() => {
          setState((v) => {
            return { ...v, displaySidebar: false };
          });
        }}
      />
    </div>
  );
}