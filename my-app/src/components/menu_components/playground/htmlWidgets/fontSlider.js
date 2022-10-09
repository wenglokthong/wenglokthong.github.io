import React, { useState } from "react";

import "../playground.css";
export const FontSlider = (props) => {
  const [value, setValue] = useState(16);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setFontSize(event.target.value);
  };

  return (
    <div>
      <div className="playground-widgets-title">Font size changer</div>
      <input
        type="range"
        onChange={handleChange}
        min="10"
        max="72"
        value={value}
      ></input>
      {value}
    </div>
  );
};
