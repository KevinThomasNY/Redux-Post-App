// theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#81daff",
    },
    secondary: {
      main: "#00f397",
    },
  },
  components: {
    // Set default props for MUI Button
    MuiButton: {
      defaultProps: {
        variant: "contained", // Default variant for buttons
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
