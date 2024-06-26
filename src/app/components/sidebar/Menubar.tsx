import Button from "@/app/components/button/Button";
import { HiPlus } from "react-icons/hi";
import { LuPanelLeft } from "react-icons/lu";
import { useAppContext } from "../AppContext";
import { ActionType } from "@/reducer/AppReducer";

export default function Menubar() {
  const { dispatch } = useAppContext();

  return (
    <div className="flex space-x-3 ml-2 mr-2 mt-4 font-semibold">
      <Button icon={HiPlus} variant="outline" className="flex-1">
        新建对话
      </Button>

      <Button
        icon={LuPanelLeft}
        variant="outline"
        onClick={() => {
          dispatch({
            type: ActionType.UPDATE,
            field: "displaySidebar",
            value: false,
          });
        }}
      />
    </div>
  );
}
