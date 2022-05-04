import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./button.css";

export const MyButton = (_name, _cssStyle) => {
  return (
    //if no cssStyle specified, use default(?)
    <button className={_cssStyle}>{_name}</button>
  );
};

export const MyHomeButton = () => {
  return (
    <Link to="/">
      <button className="myhomebutton">Back to home</button>
    </Link>
  );
};

export const MyBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="mybackbutton" onClick={() => navigate(-1)}>
      Back to previous
    </button>
  );
};
