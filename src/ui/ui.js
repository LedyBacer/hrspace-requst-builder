import { Checkbox, createTheme, styled, ToggleButton } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    allVariants: { fontFamily: ["Arial", "serif"].join(",") },
  },
  palette: {
    rqback: {
      main: "#000000",
      light: "#E8F4FF",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    rqwhite: {
      main: "#F2F5FA",
    },
  },
});

export const ThemedToggleButton = styled(ToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#000000",
  },
  height: "36px",
  borderRadius: "8px",
  color: "black",
});

export const ThemedCheckbox = styled(Checkbox)({
  "&.Mui-checked": {
    color: "black",
  },
  "& .MuiSvgIcon-root": { fontSize: 24 },
});

export default theme;
