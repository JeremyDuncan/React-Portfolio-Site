// *****************************************************************************
// This is the Military Page
// *****************************************************************************
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import MilitaryTraining from "../components/military-components/MilitaryTraining";

const Military = () => {

  // Add the Google Analytics tracking code
  React.useEffect(() => {
    window.gtag('config', 'G-6S5BDFXFJW', {
      'page_title': 'Military Page',
      'page_path': window.location.pathname,
    });
  }, []);

  return (
    <Box>
      <br />
      <br />
      <MilitaryTraining />
    </Box>
  );
};
export default Military;
