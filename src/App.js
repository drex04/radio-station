import React from "react";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Archive from "./components/Archive";
import Blog from "./components/Blog";
import About from "./components/About";
import Support from "./components/Support";
import Chat from "./components/Chat";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="login" element={<Login />} />
              <Route exact path="archive" element={<Archive />} />
              <Route exact path="blog" element={<Blog />} />
              <Route exact path="about" element={<About />} />
              <Route exact path="support" element={<Support />} />
              <Route exact path="chat" element={<Chat />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
