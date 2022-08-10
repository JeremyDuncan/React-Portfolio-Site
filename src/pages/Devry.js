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
import DevryHeader from "../components/devry-components/DevryHeader";
import DevryProjects from "../components/devry-components/DevryProjects";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
class Devry extends Component {
  render() {
    return (
      <Box>
        <DevryHeader />
        <DevryProjects />
        <ContactMe />
        <Footer />
      </Box>
    );
  }
}
export default Devry;
