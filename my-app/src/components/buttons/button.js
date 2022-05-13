import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./button.css";

//material ui
import { Button, ThemeProvider, createTheme } from "@material-ui/core";
import { indigo, lightBlue } from "@material-ui/core/colors";

const MyButtonTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: lightBlue[500],
    },
  },
});

export const MyButton = (props) => {
  return (
    <ThemeProvider theme={MyButtonTheme}>
      <Button color="primary" variant="contained" onClick={props.onClick}>
        {props.name}
      </Button>
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
