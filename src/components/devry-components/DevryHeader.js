// *****************************************************************************
// This is the Home Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import React, { Component } from "react";

class DevryHeader extends Component {
  render() {
    return (
      <AppBar elevation={9} position="sticky">
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <Paper sx={{ borderRadius: "0px", bgcolor: "#ffffff" }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "1.5rem",
              }}
            >
              <img
                src={require("../../images/devry-images/DeVry_University_Logo1.png")}
                distance={400}
                width="130px"
              />
              <Button
                sx={{ color: "button.textLight" }}
                href="/"
                variant="contained"
                startIcon={<ArrowBackIcon />}
              >
                Home
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </AppBar>
    );
  }
}
export default DevryHeader;
