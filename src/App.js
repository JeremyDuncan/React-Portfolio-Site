import * as React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#428e92",
      main: "#006064",
      dark: "#00363a",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#819ca9",
      main: "#546e7a",
      dark: "#29434e",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  return (
    <Box>
      TEST
      {/* <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <br />
          <Portfolio />
          <br />
          <ContactMe />
          <Footer />
        </div>
      </ThemeProvider> */}
    </Box>
  );
}

export default App;

// <img width="50px" src={require("../images/Jeremy_duncan_logo_React.webp")}/>
