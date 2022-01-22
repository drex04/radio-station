import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./Header";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme.js";


export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}