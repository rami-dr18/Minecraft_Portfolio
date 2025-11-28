import useWindowStore from "#store/window";
import { X } from "lucide-react";
const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <X
        size={20}
        onClick={() => closeWindow(target)}
        className="cursor-pointer"
      />
      {/* <div className="minimize" />
      <div className="maximize" /> */}
    </div>
  );
};

export default WindowControls;
