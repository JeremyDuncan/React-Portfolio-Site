// *****************************************************************************
// This is the Home Page
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
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
                pl: { xs: "1rem", sm: "1.5rem", md: "7.5rem" },
                pr: { xs: "1rem", sm: "1.5rem", md: "7.5rem" },
                pt: { xs: ".5rem", sm: ".5rem", md: "1rem" },
                pb: { xs: ".5rem", sm: ".5rem", md: "1rem" },
              }}
            >
              <img
                src={require("../../images/devry-images/DeVry_University_Logo1.png")}
                distance={400}
                width="130px"
                alt="devry logo"
              />
              <Button
                sx={{ color: "#004787", fontWeight: "bold" }}
                href="/"
                startIcon={<ArrowBackIcon />}
                variant="outlined"
                size="large"
              >
                Back
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </AppBar>
    );
  }
}
export default DevryHeader;