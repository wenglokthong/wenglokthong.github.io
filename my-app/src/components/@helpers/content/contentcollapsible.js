import { useState } from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

import "./content.css";

export const ContentCollapsible = (props) => {
  const [isShowContent, setShowContent] = useState(false);

  return (
    <>
      <div
        className="collapsible-title"
        style={{
          maxWidth: "max-content",
          maxHeight: "max-content",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          setShowContent(!isShowContent);
        }}
      >
        {props.title} <ArrowDropDown fontSize="large" />
      </div>

      {isShowContent && <div className="collapsible">{props.children}</div>}
    </>
  );
};
