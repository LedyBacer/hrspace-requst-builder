import { Checkbox, createTheme, styled, ToggleButton } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
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
