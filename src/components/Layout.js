import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./Header";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme.js";


export default function Layout(props) {
  let authStatus = props.authStatus;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header authStatus={authStatus} />
        <Container>
          <Outlet />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}