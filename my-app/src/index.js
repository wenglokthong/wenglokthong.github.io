///entry point///

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import MyRoutes from "./routes.js";

import "./index.css";

//material ui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const GlobalTheme = createTheme({
  palette: {
    background: {
      default: "#2C2F33",
    },

    primary: {
      main: "#5865F2",
    },
    secondary: {
      main: "#97A9B4",
    },
    text: {
      primary: "#FFFFFF",
    },
    secondary2: {
      main: "#2C2F33",
    },
    secondary3: {
      main: "#23272A",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

root.render(
  <ThemeProvider theme={GlobalTheme}>
    <HashRouter>{MyRoutes}</HashRouter>
    <CssBaseline />
  </ThemeProvider>
);
