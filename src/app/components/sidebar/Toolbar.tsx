import Button from "@/app/components/button/Button";
import { useAppContext } from "../AppContext";
import { MdDarkMode, MdInfo, MdLightMode } from "react-icons/md";
import { ActionType } from "@/reducer/AppReducer";

export default function Toolbar() {
  const {
    state: { themeMode },
    dispatch,
  } = useAppContext();

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3 bg-neutral-50 dark:bg-neutral-900">
      <Button
        icon={themeMode === "dark" ? MdDarkMode : MdLightMode}
        variant="text"
        onClick={() => {
          dispatch({
            type: ActionType.UPDATE,
            field: "themeMode",
            value: themeMode === "dark" ? "light" : "dark",
          });
        }}
      />

      <Button icon={MdInfo} variant="text" />
    </div>
  );
}
