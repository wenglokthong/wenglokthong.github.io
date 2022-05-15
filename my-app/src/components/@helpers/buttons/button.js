import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./button.css";

//material ui
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { indigo, lightBlue } from "@mui/material/colors";

const MyButtonTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: lightBlue[500],
    },
    colorThree: {
      main: "#FFFFFF",
    },
  },
});

export const MyButton = (props) => {
  return (
    <ThemeProvider theme={MyButtonTheme}>
      <Button color="colorThree" variant="text" onClick={props.onClick}>
        {props.name}
      </Button>
    </ThemeProvider>
  );
};

export const MyLinkButton = (props) => {
  return (
    <ThemeProvider theme={MyButtonTheme}>
      <Link to={props.path}>
        <Button color="primary" variant="contained" onClick={props.onClick}>
          {props.name}
        </Button>
      </Link>
    </ThemeProvider>
  );
};

export const MyHomeButton = () => {
  return (
    <ThemeProvider theme={MyButtonTheme}>
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
    <ThemeProvider theme={MyButtonTheme}>
      <Button color="primary" variant="contained" onClick={() => navigate(-1)}>
        Back to previous
      </Button>{" "}
    </ThemeProvider>
  );
};
