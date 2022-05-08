import React from "react";

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
      <div className="playground-widgets">
        Font size changer
        <input
          type="range"
          onChange={this.handleChange}
          min="0"
          max="100"
          value={this.state.value}
        ></input>
        {this.state.value}
      </div>
    );
  }
}
