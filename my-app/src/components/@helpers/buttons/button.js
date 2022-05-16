import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./button.css";

//material ui
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo, lightBlue } from "@mui/material/colors";
import { GlobalTheme } from "../../..";

export const MyButton = (props) => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Button color="primary" variant="text" onClick={props.onClick}>
        {props.name}
      </Button>
    </ThemeProvider>
  );
};

export const MyCustomThemeButton = (props) => {
  return (
    <Button {...props} onClick={props.onClick}>
      {props.name}
    </Button>
  );
};

export const MyLinkButton = (props) => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Link to={props.path}>
        <Button color="primary" variant="contained" onClick={props.onClick}>
          {props.name}
        </Button>
      </Link>
    </ThemeProvider>
  );
};

export const MyCustomThemeLinkButton = (props) => {
  return (
    <Link to={props.path}>
      <MyCustomThemeButton color="primary" variant="contained" {...props} />
    </Link>
  );
};

export const MyHomeButton = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Link to="/">
        <Button color="primary" variant="contained">
          Back to home
        </Button>
      </Link>
    </ThemeProvider>
  );
};

export const MyBackButton = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Button color="primary" variant="contained" onClick={() => navigate(-1)}>
        Back to previous
      </Button>{" "}
    </ThemeProvider>
  );
};
