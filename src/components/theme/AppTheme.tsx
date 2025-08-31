"use client";

import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, styled } from "@mui/material/styles";
import { blue, grey } from "@mui/material/colors";
import { Toolbar } from "@mui/material";

declare module "@mui/material/styles" {
  export interface Theme {
    menubar: {
      dark: string;
      darker: string;
    };
  }
  // allow configuration using `createTheme()`
  export interface ThemeOptions {
    menubar?: {
      dark?: string;
      darker?: string;
    };
  }
}

interface AppThemeProps {
  children: React.ReactNode;
}

export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  backgroundColor: theme.menubar.darker,
}));

const darkTheme = createTheme({
  menubar: { dark: grey[700], darker: grey[800] },
  palette: { mode: "dark" },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold",
          color: "white",
          backgroundColor: blue["A400"],
        },
      },
    },
  },
});

export default function AppTheme({ children }: AppThemeProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
