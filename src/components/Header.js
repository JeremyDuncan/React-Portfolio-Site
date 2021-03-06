// *****************************************************************************
// This component displays the Header section and links
// Goes to ==> App.js Component
// *****************************************************************************

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const pages = [
  <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    target="_blank"
    rel="noopener"
    href="https://github.com/JeremyDuncan"
  >
    Github Profile
  </Link>,
  <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    target="_blank"
    rel="noopener"
    href="https://www.linkedin.com/in/jeremy-duncan2021/"
  >
    LinkedIn
  </Link>,
  <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    target="_blank"
    rel="noopener"
    href="https://jeremy-duncan.notion.site/Military-Experience-7abdbb418a6b40e7b2abd161eed48cda"
  >
    Military Experience
  </Link>,
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={9} position="sticky">
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "space-evenly", lg: "space-around" },
        }}
      >
        <Toolbar disableGutters>
          <EmojiPeopleIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "header.textLight",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: "header.textLight",
              textDecoration: "none",
              textShadow: "1.5px 1.5px 4px #292727",
            }}
          >
            {/* Desktop View */}
            Jeremy Duncan
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "header.textLight" }}
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          &nbsp;
          <EmojiPeopleIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "header.textLight",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "header.textLight",
              textDecoration: "none",
              textShadow: "1.5px 1.5px 4px #292727",
            }}
          >
            {/* Mobile View */}
            Jeremy Duncan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
