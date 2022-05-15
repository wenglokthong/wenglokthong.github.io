import { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { MyButton } from "../buttons/button";

export const ButtonGroupContent = (props) => {
  const [content, setContent] = useState(null);

  return (
    <div style={props.style}>
      <ButtonGroup {...props.settings}>
        {props.buttonArray.map((element, index) => {
          return (
            <div key={index}>
              <MyButton
                name={element.name}
                onClick={() => {
                  setContent(element.content);
                }}
              />
            </div>
          );
        })}
      </ButtonGroup>
      <div>{content && content}</div>
    </div>
  );
};
