import { useState } from "react";

export const ScreenModeChanger = (props) => {
  const [isLight, setIsLight] = useState(true);

  const handleChange = (e) => {
    setIsLight(e.target.checked);
    props.setIsLightMode(e.target.checked);
  };
  return (
    <div>
      <div className="playground-widgets-title">Light mode toggle</div>
      <input
        type="checkbox"
        onClick={handleChange}
        defaultChecked={true}
      ></input>
      <div>{isLight.toString()}</div>
    </div>
  );
};
