// *****************************************************************************
// This is the Home Page
// *****************************************************************************
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import Portfolio from "../components/Portfolio";

const Home = () => {

  // Add the Google Analytics tracking code
  useEffect(() => {
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
