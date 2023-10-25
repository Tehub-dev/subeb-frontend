import React from "react";
import { XIcon } from "@heroicons/react/solid";

import "./popup.css";
import useOverlay from "../../hooks/useOverlay";

const Popup = ({ children, display, setDisplay }) => {
  const { setDisplayOverlay } = useOverlay();
  return (
    <div className={display ? "pop-up" : "none"}>
      <div
        className="close-div"
        onClick={() => {
          if (setDisplay) {
            setDisplay(false);
            setDisplayOverlay(false);
          }
        }}
      >
        <XIcon className="close-x" />
      </div>
      {children}
    </div>
  );
};

export default Popup;
