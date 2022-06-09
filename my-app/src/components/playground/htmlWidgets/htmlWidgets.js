import React from "react";
import { FontSlider } from "./fontSlider";
import { ScreenModeChanger } from "./screenModeChanger";
import { MyHomeButton } from "../../@helpers/buttons/button";
import "../playground.css";

export class HTMLWidgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 16,
      isLightMode: true,
    };
  }

  componentWillUnmount() {
    document.body.style = null;
  }

  getFontSize = (value) => {
    this.setState({ fontSize: value });
  };

  getIsLightMode = (value) => {
    this.setState({ isLightMode: value });

    document.body.style.backgroundColor = value ? null : "black";
    document.body.style.color = value ? null : "white"; //font color
  };

  render() {
    return (
      <>
        <div
          className="playground-body"
          style={{ fontSize: this.state.fontSize.toString() + "px" }}
        >
          <div className="playground-intro">
            This section is used to play around with random functionalities.
          </div>
          <div className="playground-playground">
            <FontSlider setFontSize={this.getFontSize} />
            <ScreenModeChanger setIsLightMode={this.getIsLightMode} />
          </div>
          <div>{MyHomeButton()}</div>
        </div>
      </>
    );
  }
}
