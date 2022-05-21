import { useState, useRef } from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import "./content.css";

export const ContentCollapsible = (props) => {
  const [height, setHeight] = useState("0px");
  const [isOn, setIsOn] = useState(false);
  const Type = props.type ? props.type : "h1";

  const content = useRef(null);
  return (
    <div style={props.style}>
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

          setHeight(!isOn ? `${content.current.scrollHeight}px` : "0px");
        }}
      >
        {props.title} <ArrowDropDown fontSize="large" />
      </Type>

      <div
        ref={content}
        className="collapsible-content"
        style={{ ...props.contentStyle, height: height }}
      >
        {props.children}
      </div>
    </div>
  );
};
