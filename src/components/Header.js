import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import tnpLogo from "../assets/tnp-logo.png";

export default function Header(props) {
  let authStatus = props.authStatus;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <Box
              component="img"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
              alt="Home"
              src={tnpLogo}
              className="tnp-logo"
            />
          </NavLink>
          <Box
            sx={{
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink to="archive">
              <Typography variant="h5">Archive</Typography>
            </NavLink>
            <NavLink to="blog">
              <Typography variant="h5">Blog</Typography>
            </NavLink>
            <NavLink to="about">
              <Typography variant="h5">About</Typography>
            </NavLink>
            <NavLink to="support">
              <Typography variant="h5">Support</Typography>
            </NavLink>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "flex" },
            }}
          >
            <IconButton
              size="large"
              aria-label="TNP Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block" },
              }}
            >
              <MenuItem key="home" onClick={handleCloseNavMenu}>
                <NavLink to="/">
                  <Typography textAlign="center">Home</Typography>
                </NavLink>
              </MenuItem>

              <MenuItem key="signin" onClick={handleCloseNavMenu}>
                <NavLink to="signin">
                  <Typography textAlign="center">Login</Typography>
                </NavLink>
              </MenuItem>

              <MenuItem key="profile" onClick={handleCloseNavMenu}>
                <NavLink to="profile">
                  <Typography textAlign="center">Profile</Typography>
                </NavLink>
              </MenuItem>

              <MenuItem
                key="archive"
                onClick={handleCloseNavMenu}
                sx={{
                  display: { md: "none" },
                }}
              >
                <NavLink to="archive">
                  <Typography textAlign="center">Archive</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem
                key="blog"
                onClick={handleCloseNavMenu}
                sx={{
                  display: { md: "none" },
                }}
              >
                <NavLink to="blog">
                  <Typography textAlign="center">Blog</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem
                key="about"
                onClick={handleCloseNavMenu}
                sx={{
                  display: { md: "none" },
                }}
              >
                <NavLink to="about">
                  <Typography textAlign="center">About</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem
                key="support"
                onClick={handleCloseNavMenu}
                sx={{
                  display: { md: "none" },
                }}
              >
                <NavLink to="support">
                  <Typography textAlign="center">Support</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
