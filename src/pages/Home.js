// *****************************************************************************
// This is the Home Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import ContactFooter from "../components/contact-components/ContactFooter";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <Box>
      <Header />
      <br />
      <Portfolio />
      <br />
      <ContactFooter />
    </Box>
  );
};

export default Home;
