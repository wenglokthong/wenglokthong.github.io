import React from "react";
import "./playground.css";
export class FontSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 16,
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.setFontSize(event.target.value);
  };

  render() {
    return (
      <div>
        <div className="playground-widgets-title">Font size changer</div>
        <input
          type="range"
          onChange={this.handleChange}
          min="10"
          max="72"
          value={this.state.value}
        ></input>
        {this.state.value}
      </div>
    );
  }
}
