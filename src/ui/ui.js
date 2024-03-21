import {
  Checkbox,
  createTheme,
  styled,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

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
    rqblue: {
      main: "#61AEF2",
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
  padding: "0 3px 0 0",
  margin: 0,
});

export const ThemedToggleButtonGroup = styled(ToggleButtonGroup)({
  gap: "8px",
  "& .MuiToggleButtonGroup-grouped": {
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "8px",
  },
});

export default theme;
