// *****************************************************************************
// This is the Military Page
// *****************************************************************************
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import MilitaryTraining from "../components/military-components/MilitaryTraining";

const Military = () => {

  // Add the Google Analytics tracking code
  useEffect(() => {
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
