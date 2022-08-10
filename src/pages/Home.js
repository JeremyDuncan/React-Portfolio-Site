// *****************************************************************************
// This is the Home Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import React, { Component } from "react";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

class Home extends Component {
  render() {
    return (
      <Box>
        <Header />
        <br />
        <Portfolio />
        <br />
        <ContactMe />
        <Footer />
      </Box>
    );
  }
}
export default Home;
