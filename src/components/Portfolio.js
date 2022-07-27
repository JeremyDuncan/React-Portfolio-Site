// *****************************************************************************
// This is the main portfiolio section. Contains MainSection Component
// Goes to ==> App.js Component
// *****************************************************************************

import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainSection from "./MainSection";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

//======================== CLASS BoxDesign ====================================>
class Portfolio extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* === PORTFOLIO IMAGE OF ME === */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={11} md={5}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/me_ny.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={11} md={10}>
            <Item sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
              <Typography
                variant="h4"
                sx={{
                  textShadow: "1.5px 1.5px 4px #292727",
                  paddingBottom: 1,
                }}
              >
                Hello! I'm Jeremy
              </Typography>
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
  }
}
export default Portfolio;
