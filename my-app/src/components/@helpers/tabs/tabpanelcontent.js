import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Tab, Tabs, AppBar } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { GlobalTheme } from "../../..";
import { TabDefaultTheme } from "./tabtheme";

export const TabPanelContent = (props) => {
  const [value, setValue] = useState("0");
  const [swipeIndex, setSwipeIndex] = useState(0);

  return (
    <div style={props.style}>
      <AppBar position="static" color="secondary">
        <ThemeProvider theme={props.theme ? props.theme : TabDefaultTheme}>
          <Tabs
            value={parseInt(value)}
            textColor="primary"
            indicatorColor="secondary"
            variant="fullWidth"
            scrollButtons="auto"
            onChange={(e, newVal) => {
              setValue(newVal);
              setSwipeIndex(newVal);
            }}
            {...props.settings}
          >
            {props.tabsArray.map((element, index) => {
              return <Tab key={index} label={element.name} value={index} />;
            })}
          </Tabs>
        </ThemeProvider>
      </AppBar>

      <SwipeableViews index={parseInt(value)} animateHeight={true}>
        {props.tabsArray.map((element, index) => {
          return <div key={index}>{element.content}</div>;
        })}
      </SwipeableViews>
    </div>
  );
};
