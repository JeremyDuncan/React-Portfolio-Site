// *****************************************************************************
// This component displays the Header section and links
// Goes to:
// ==> Home.js      // Homepage of portfolio site
// ==> Military.js  // Military training information
// ==> Devry.js     // Devry college projects / portfolio
// ==> Contact.js   // Contact information and media links
// *****************************************************************************
import { AppBar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Slide, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ContactPageIcon, DescriptionIcon, EmojiPeopleIcon, HomeIcon, MenuIcon, MilitaryTechIcon, RssFeedIcon, SchoolIcon } from "../mui-icons";

const pages = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon sx={{ display: "inline-flex", verticalAlign: "text-bottom", textAlign: "center", fontSize: "large", pr: { xs: ".5rem", sm: ".3rem" }, }} />,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1PGlstEol5OUk9diDouneruzw6PQe3Hx9/view?usp=sharing",
    icon: <DescriptionIcon sx={{ display: "inline-flex", verticalAlign: "text-bottom", textAlign: "center", fontSize: "large", pr: { xs: ".5rem", sm: ".3rem" }, }} />,
    external: true,
  },
  {
    label: "Blog",
    href: "https://www.gingertechblog.com",
    icon: <RssFeedIcon sx={{ display: "inline-flex", verticalAlign: "text-bottom", textAlign: "center", fontSize: "large", pr: { xs: ".5rem", sm: ".3rem" }, }} />,
    external: true,
  },
  {
    label: "Military",
    href: "/Military-Training",
    icon: <MilitaryTechIcon sx={{ display: "inline-flex", verticalAlign: "text-bottom", textAlign: "center", fontSize: "large", pr: { xs: ".5rem", sm: "0rem" }, }} />,
  },
  {
    label: "College",
    href: "/DeVry-University-Projects",
    icon: <SchoolIcon sx={{ display: "inline-flex", verticalAlign: "text-bottom", textAlign: "center", fontSize: "large", pr: { xs: ".5rem", sm: ".3rem" }, }} />,
  },
  {
    label: "Contact",
    href: "/Contact",
    icon: <ContactPageIcon sx={{ display: "inline-flex", verticalAlign: "text-bottom", textAlign: "center", fontSize: "large", pr: { xs: ".5rem", sm: ".3rem" }, }} />,
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLinkClick = (label) => {
    if (window.gtag) {
      window.gtag('event', 'header_link_click', {
        event_category: 'Header',
        event_label: label,
      });
    } else {
      console.error("gtag not found on window object");
    }
  };

  return (
    <Slide in={showHeader}>
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
                  <MenuItem key={page.label} onClick={() => handleLinkClick(page.label)}>
                    <Typography sx={{ color: "black" }}>
                      {page.icon} {page.label}
                    </Typography>
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
              Jeremy Duncan
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Grid key={page.label} sx={{ pr: ".5rem" }}>
                  <Button
                    className="headerLink"
                    size="small"
                    onClick={() => handleLinkClick(page.label)}
                    sx={{
                      my: 2,
                      color: "white",
                    }}
                    href={page.href}
                    target={page.external ? "_blank" : "_self"}
                    rel={page.external ? "noopener" : undefined}
                  >
                    {page.icon} {page.label}
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
    </Slide>
  );
};

export default Header;
