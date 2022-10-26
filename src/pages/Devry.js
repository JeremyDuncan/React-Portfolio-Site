// *****************************************************************************
// This is the Devry Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import ContactFooter from "../components/contact-components/ContactFooter";
import DevryProjects from "../components/devry-components/DevryProjects";
import Header from "../components/Header";

const Devry = () => {
  return (
    <Box>
      <Header />
      <br />
      <br />
      <DevryProjects />
      <ContactFooter />
    </Box>
  );
};

export default Devry;
