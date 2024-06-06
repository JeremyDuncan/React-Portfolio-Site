// *****************************************************************************
// This is the Devry Page
// *****************************************************************************
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import DevryProjects from "../components/devry-components/DevryProjects";

const Devry = () => {
  
  // Add the Google Analytics tracking code
  useEffect(() => {
    window.gtag('config', 'G-6S5BDFXFJW', {
      'page_title': 'College Page',
      'page_path': window.location.pathname,
    });
  }, []);

  return (
    <Box>
      <br />
      <br />
      <DevryProjects />
    </Box>
  );
};

export default Devry;
