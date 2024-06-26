// *****************************************************************************
// This is the Contact Page
// *****************************************************************************
import Box from "@mui/material/Box";
import React, { useEffect } from 'react';
import ContactInfo from "../components/contact-components/ContactInfo";

const Contact = () => {

  // Add the Google Analytics tracking code
  useEffect(() => {
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
