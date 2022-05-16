import { useState } from "react";
import { ButtonGroup } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { MyCustomThemeButton } from "./button";
import { GlobalTheme } from "../../..";

export const ButtonGroupContent = (props) => {
  const [content, setContent] = useState(props.buttonArray[0].content);

  return (
    <div style={props.style}>
      <ThemeProvider theme={props.theme ? props.theme : GlobalTheme}>
        <ButtonGroup {...props.settings}>
          {props.buttonArray.map((element, index) => {
            return (
              <div key={index}>
                <MyCustomThemeButton
                  name={element.name}
                  onClick={() => {
                    setContent(element.content);
                  }}
                />
              </div>
            );
          })}
        </ButtonGroup>
      </ThemeProvider>
      <div>{content && content}</div>
    </div>
  );
};
