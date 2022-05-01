import React from "react";
import "./playground.css";
import { MyHomeButton } from "../buttons/button";

class RangeSlider extends React.Component {
  state = {
    value: 50,
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div style={{ fontSize: this.state.value.toString() + "px" }}>
        <input
          type="range"
          onChange={this.handleChange}
          min="0"
          max="100"
        ></input>
        {this.state.value}
      </div>
    );
  }
}

export class Playground extends React.Component {
  render() {
    return (
      <div className="playground-body">
        <div className="playground-intro">
          This section is used to play around with random functionalities.
        </div>
        <div className="playground-playground">
          <RangeSlider />
        </div>
        <div>{MyHomeButton()}</div>
      </div>
    );
  }
}
