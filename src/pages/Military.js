// *****************************************************************************
// This is the Military Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import ContactFooter from "../components/contact-components/ContactFooter";

import Header from "../components/Header";
import MilitaryTraining from "../components/military-components/MilitaryTraining";

const Military = () => {
  return (
    <Box>
      <Header />
      <br />
      <br />
      <MilitaryTraining />
      <ContactFooter />
    </Box>
  );
};
export default Military;
