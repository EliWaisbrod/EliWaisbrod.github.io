import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: ["Inter", "system-ui", "Arial"].join(","),
    h2: { fontWeight: 900, letterSpacing: -0.6 },
    h4: { fontWeight: 850, letterSpacing: -0.2 },
    h6: { fontWeight: 650 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingLeft: 14,
          paddingRight: 14,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
        },
      },
    },
  },
});

export default theme;
