// *****************************************************************************
// This component displays the Header section and links
// Goes to:
// ==> Home.js      // Homepage of portfolio site
// ==> Military.js  // Military training information
// ==> Devry.js     // Devry college projects / portfolio
// ==> Contact.js   // Contact information and media links
// *****************************************************************************
import { AppBar, Box, Button, Container, Grid, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { ContactPageIcon, DescriptionIcon, EmojiPeopleIcon, HomeIcon, MenuIcon, MilitaryTechIcon, RssFeedIcon, SchoolIcon, } from "../mui-icons";

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
    href="https://drive.google.com/file/d/1PGlstEol5OUk9diDouneruzw6PQe3Hx9/view?usp=sharing"
    target="_blank"
    rel="noopener"
  >
    <DescriptionIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "large",
        pr: { xs: ".5rem", sm: ".3rem" },
      }}
    />
    Resume
  </Link>,
    <Link
    sx={{ textShadow: "0px 1.5px 9px #292727" }}
    color="inherit"
    underline="none"
    href="https://www.gingertechblog.com"
    target="_blank"
    rel="noopener"
  >
    <RssFeedIcon
      sx={{
        display: "inline-flex",
        verticalAlign: "text-bottom",
        textAlign: "center",
        fontSize: "large",
        pr: { xs: ".5rem", sm: ".3rem" },
      }}
    />
    Blog
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
