// *****************************************************************************
// This is the main portfiolio section. Contains MainSection Component
// Goes to ==> App.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import React, { Component } from "react";
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
          <Grid item xs={8} sm={6} md={5} lg={4} xl={3}>
            <Item
              elevation={14}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/me_ny.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
          </Grid>
        </Grid>
        {/*//=========== GRID END ===============> */}
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
