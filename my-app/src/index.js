///entry point///
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MyRoutes from "./routes.js";

import "./index.css";

//material ui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { indigo, lightBlue } from "@mui/material/colors";

const GlobalTheme = createTheme({
  palette: {
    background: {
      default: "#10064f",
    },

    primary: {
      main: indigo[500],
    },
    secondary: {
      main: lightBlue[500],
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <HashRouter>{MyRoutes}</HashRouter>
      <CssBaseline />
    </ThemeProvider>
  );
};

root.render(<App />);
