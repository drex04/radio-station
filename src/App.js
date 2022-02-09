import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Archive from "./components/Archive";
import Blog from "./components/Blog";
import About from "./components/About";
import Support from "./components/Support";
import Chat from "./components/Chat";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.js";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState(false);

  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // let email = data.get("email");
    // let password = data.get("password");
  };

  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // let email = data.get("email");
    // let password = data.get("password");
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      setAuthStatus(true);
    }
  }, [setAuthStatus]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Routes>
            <Route path="/" element={<Layout authStatus={authStatus} />}>
              <Route index element={<Homepage />} />
              <Route exact path="archive" element={<Archive />} />
              <Route exact path="blog" element={<Blog />} />
              <Route exact path="about" element={<About />} />
              <Route exact path="support" element={<Support />} />
              <Route exact path="profile" element={<ProfilePage />} />
              <Route
                exact
                path="signin"
                element={
                  <SignIn
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmitSignIn={handleSubmitSignIn}
                  />
                }
              />
              <Route
                exact
                path="signup"
                element={
                  <SignUp
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmitSignUp={handleSubmitSignUp}
                  />
                }
              />
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
