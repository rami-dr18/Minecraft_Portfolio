import useWindowStore from "#store/window";
import { X } from "lucide-react";
const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      {/* <div className="close" onClick={() => closeWindow(target)} /> */}
      <X
        size={20}
        stroke="#556B2F"
        onClick={() => closeWindow(target)}
        className="cursor-pointer"
      />
      {/* <div className="minimize" />
      <div className="maximize" /> */}
    </div>
  );
};

export default WindowControls;
