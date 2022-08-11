// *****************************************************************************
// This is the Devry Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import React, { Component } from "react";
import DevryContactMe from "../components/devry-components/DevryContactMe";
import DevryFooter from "../components/devry-components/DevryFooter";
import DevryHeader from "../components/devry-components/DevryHeader";
import DevryProjects from "../components/devry-components/DevryProjects";

class Devry extends Component {
  render() {
    return (
      <Box>
        <DevryHeader />
        <br />
        <br />
        <DevryProjects />
        <DevryContactMe />
        <DevryFooter />
      </Box>
    );
  }
}
export default Devry;
