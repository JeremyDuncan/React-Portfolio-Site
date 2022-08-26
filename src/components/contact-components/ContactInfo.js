// *****************************************************************************
// This is the MilitaryProjects Component.
// Goes to ==> Contact.js Component
// Images need to be 600w x 300h for best look
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class MilitaryTraining extends Component {
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
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              color="lightgray"
              sx={{
                fontWeight: "500",
                textAlign: "center",
                display: { xs: "none", sm: "none", md: "initial" },
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h4"
              color="lightgrey"
              sx={{
                fontWeight: "500",
                textAlign: "center",
                display: { xs: "initial", sm: "initial", md: "none" },
              }}
            >
              Let's Connect
            </Typography>

            <Typography
              variant="h4"
              mb={1}
              sx={{
                color: "lightgrey",
                textAlign: "center",
                display: { xs: "none", sm: "none", md: "initial" },
              }}
            >
              My Contact Info
            </Typography>
            <Typography
              variant="h7"
              mb={1}
              sx={{
                color: "lightgrey",
                textAlign: "center",
                display: { xs: "initial", sm: "initial", md: "none" },
              }}
            >
              My Contact Info
            </Typography>

            <Grid
              xs={6}
              sx={{
                height: "1px",
                border: {
                  xs: "4px solid gray",
                  sm: "4px solid gray",
                  md: "6px solid gray",
                  lg: "6px solid gray",
                  xl: "6px solid gray",
                },
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItem: "center",
                margin: "auto",
                width: { xs: "350px", sm: "530px", md: "1150px" },
                borderRadius: "20px",
                marginBottom: ".2rem",
              }}
            />
          </Grid>
          <Grid
            elevation={24}
            mb={5}
            ml={1.2}
            xs={10}
            sx={{
              height: "1px",
              border: "2px solid clear",
              borderRadius: "20px",
            }}
          />

          {/*//========================= Pictures GRID BOX ================> */}
          <Grid
            sx={{
              gap: { xs: ".3rem", sm: ".3rem", md: "1rem", xl: "1rem" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            pr={2}
            pl={3}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
              <Typography>Call</Typography>
              <Typography>Email</Typography>
              <Typography>LinkedIn</Typography>
              <Typography>GitHub</Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={12}>
              {/*==> Image Link <== ===*/}
              <Image
                src={require("../../images/Jeremy_duncan_logo_React.webp")}
                sx={{ borderRadius: "5px" }}
                shift="right"
                distance={400}
              />
            </Grid>
          </Grid>
          {/*//================= PICTURE GRID END =========================> */}
        </Grid>
      </Box>
    );
  }
}
export default MilitaryTraining;
