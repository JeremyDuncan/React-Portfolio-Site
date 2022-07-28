import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

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
      main: "#95c2e2",
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
    }
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <br />
          <Portfolio />
          <br />
          <ContactMe />
          <Footer />
        </div>
      </ThemeProvider>
    </Box>
  );
}
export default App;