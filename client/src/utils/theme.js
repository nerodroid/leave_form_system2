import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#37474f",
        dark: "#455a64",
        light: "#263238",
      },
      //secondary: {},
    },
  })
);

export default theme;
