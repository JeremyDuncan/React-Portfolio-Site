// *****************************************************************************
// This is the Contact Page
// *****************************************************************************
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import ContactInfo from "../components/contact-components/ContactInfo";

const Contact = () => {

  // Add the Google Analytics tracking code
  React.useEffect(() => {
    window.gtag('config', 'G-6S5BDFXFJW', {
      'page_title': 'Contact Page',
      'page_path': window.location.pathname,
    });
  }, []);

  return (
    <Box>
      <br />
      <br />
      <ContactInfo />
    </Box>
  );
};

export default Contact;
