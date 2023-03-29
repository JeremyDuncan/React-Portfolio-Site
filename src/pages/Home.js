// *****************************************************************************
// This is the Home Page
// *****************************************************************************
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import Portfolio from "../components/Portfolio";

const Home = () => {

  // Add the Google Analytics tracking code
  React.useEffect(() => {
    window.gtag('config', 'G-6S5BDFXFJW', {
      'page_title': 'Home Page',
      'page_path': window.location.pathname,
    });
  }, []);

  return (
    <Box>
      <br />
      <Portfolio />
      <br />
    </Box>
  );
};

export default Home;
