// *****************************************************************************
// Created by: Jeremy Duncan
// Updated: October 17th 2022
//
// This React app is designed to be a multi-page website using React Routes.
// Current Routes:
// ==> Home.js      // Homepage of portfolio site
// ==> Military.js  // Military training information
// ==> Devry.js     // DeVry college projects / portfolio
// ==> Contact.js   // Contact information and media links
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/contact-components/ContactFooter";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Devry from "./pages/Devry";
import Home from "./pages/Home";
import Military from "./pages/Military";

// Creates custom theme colors for webpages
const theme = createTheme({
  palette: {
    primary: {
      light: "#a4a4a4",
      main: "#757575",
      dark: "#494949",
      contrastText: "#434442",
    },
    secondary: {
      light: "#819ca9",
      main: "#d2e8f7",
      dark: "#29434e",
      contrastText: "#000000",
    },
    secondaryList: {
      text: "#25222c",
    },
    contrast: {
      textLight: "#ffffff",
      textDark: "#000000",
    },
    header: {
      textLight: "#ffffff",
      textDark: "#000000",
    },
    button: {
      textLight: "#ffffff",
      textDark: "#000000",
    },
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header/>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/DeVry-University-Projects" element={<Devry />} />
              <Route path="/Military-Training" element={<Military />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Router>
          <Footer/>
        </div>
      </ThemeProvider>
    </Box>
  );
}
export default App;
