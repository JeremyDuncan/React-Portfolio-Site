// *****************************************************************************
// This is the Contact Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import React, { Component } from "react";
import ContactFooter from "../components/contact-components/ContactFooter";
import ContactHeader from "../components/contact-components/ContactHeader";
import ContactInfo from "../components/contact-components/ContactInfo";
import Header from "../components/Header";

class Contact extends Component {
  render() {
    return (
      <Box>
        <Header />
        <br />
        <br />
        <ContactInfo />
        <ContactFooter />
      </Box>
    );
  }
}
export default Contact;
