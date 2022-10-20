// *****************************************************************************
// This is the main portfolio section. Contains MainSection Component
// Goes to ==> Home.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import AboutMe from "./AboutMe";
import MainSection from "./MainSection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//======================== CLASS BoxDesign ====================================>
const Portfolio = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid display="column" item xs={11} md={11} lg={11} xl={6}>
          <Item elevation={14} sx={{ bgcolor: "primary.main" }}>
    
            <Item
              sx={{
                background:
                  "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
                color: "contrast.textDark",
                textShadow: "0px 3px 8px #8a8a8a",
              }}
            >
              <AboutMe />
            </Item>
          </Item>
        </Grid>
      </Grid>
      <br />
      {/*//=========== GRID BOX ===============> */}
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid display="column" item xs={11} md={11} lg={11} xl={6}>
          <Item
            elevation={14}
            sx={{ bgcolor: "primary.main", color: "header.textLight" }}
          >
            {/*=== ===*/}
            <MainSection />
            {/*<== === === === === === === === === {COMPONENT} */}
            {/*=== ===*/}
          </Item>
        </Grid>
        {/*//=========== GRID END ===============> */}
      </Grid>
    </Box>
  );
};

export default Portfolio;
