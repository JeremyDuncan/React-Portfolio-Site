// *****************************************************************************
// This is the Contact Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import ContactFooter from "../components/contact-components/ContactFooter";
import ContactInfo from "../components/contact-components/ContactInfo";
import Header from "../components/Header";

const Contact = () => {
  return (
    <Box>
      <Header />
      <br />
      <br />
      <ContactInfo />
      <ContactFooter />
    </Box>
  );
};

export default Contact;
