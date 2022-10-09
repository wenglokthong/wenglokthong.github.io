import { createTheme, ThemeProvider } from "@mui/material/styles";

export const AboutMeButtonGroupTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },

    secondary: {
      main: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: [
      "Macondo",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
