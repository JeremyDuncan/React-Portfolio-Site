// *****************************************************************************
// This is the Contact Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import React, { Component } from "react";
import MilitaryContactMe from "../components/military-components/MilitaryContactMe";
import MilitaryFooter from "../components/military-components/MilitaryFooter";
import MilitaryHeader from "../components/military-components/MilitaryHeader";
import MilitaryTraining from "../components/military-components/MilitaryTraining";

class Contact extends Component {
  render() {
    return (
      <Box>
        <MilitaryHeader />
        <br />
        <br />
        <MilitaryTraining />
        <MilitaryContactMe />
        <MilitaryFooter />
      </Box>
    );
  }
}
export default Contact;
