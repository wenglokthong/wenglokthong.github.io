import React from "react";
import "./playground.css";
import { FontSlider } from "./fontSlider";
import { MyHomeButton } from "../buttons/button";

export class Playground extends React.Component {
  render() {
    return (
      <div className="playground-body">
        <div className="playground-intro">
          This section is used to play around with random functionalities.
        </div>
        <div className="playground-playground">
          <FontSlider />
        </div>
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
