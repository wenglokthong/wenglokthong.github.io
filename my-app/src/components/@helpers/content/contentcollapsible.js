import { useState } from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import "./content.css";

export const ContentCollapsible = (props) => {
  const [isShowContent, setShowContent] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const Type = props.type ? props.type : "h1";
  return (
    <>
      <Type
        className="collapsible-title"
        style={{
          maxWidth: "max-content",
          maxHeight: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          setIsOn(!isOn);

          if (!isShowContent) setShowContent(true);
        }}
      >
        {props.title} <ArrowDropDown fontSize="large" />
      </Type>

      {isShowContent && (
        <div
          className={isOn ? "collapsibleOn" : "collapsibleOff"}
          onAnimationEnd={() => {
            if (!isOn) setShowContent(false);
          }}
        >
          {props.children}
        </div>
      )}
    </>
  );
};
