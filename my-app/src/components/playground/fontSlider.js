import React from "react";

export class FontSlider extends React.Component {
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
