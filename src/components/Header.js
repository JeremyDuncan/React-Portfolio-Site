// *****************************************************************************
// This component displays the Header section and links
// Goes to:
// ==> Home.js      // Homepage of portfolio site
// ==> Military.js  // Military training information
// ==> Devry.js     // Devry college projects / portfolio
// ==> Contact.js   // Contact information and media links
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SchoolIcon from "@mui/icons-material/School";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const pages = [
  <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    href="/"
  >
    <HomeIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "large",
        pr: { xs: ".5rem", sm: ".3rem" },
      }}
    />
    Home
  </Link>,

  <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    href="/Military-Training"
  >
    <MilitaryTechIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "large",
        pr: { xs: ".5rem", sm: "0rem" },
      }}
    />
    Military
  </Link>,
  <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    href="/DeVry-University-Projects"
  >
    <SchoolIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "large",
        pr: { xs: ".5rem", sm: ".3rem" },
      }}
    />
    College
  </Link>,
  <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    href="/Contact"
  >
    <ContactPageIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "large",
        pr: { xs: ".5rem", sm: ".3rem" },
      }}
    />
    Contact
  </Link>,
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
          justifyContent: {
            xs: "space-evenly",
            lg: "space-around",
          },

          flexDirection: "column",
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
              <Grid sx={{ pr: ".5rem" }}>
                <Button
                  className="headerLink"
                  size="small"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                  }}
                >
                  {page}
                </Button>
              </Grid>
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
