import { ButtonGroup } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { MyCustomThemeLinkButton } from "./button";
import { GlobalTheme } from "../../..";

export const ButtonGroupLinks = (props) => {
  return (
    <div style={props.style}>
      <ThemeProvider theme={props.theme ? props.theme : GlobalTheme}>
        <ButtonGroup {...props.settings}>
          {props.buttonArray.map((element, index) => {
            return (
              <div key={index}>
                <MyCustomThemeLinkButton
                  style={{ margin: props.buttonMargin }}
                  name={element.name}
                  path={element.path}
                />
              </div>
            );
          })}
        </ButtonGroup>
      </ThemeProvider>
    </div>
  );
};
