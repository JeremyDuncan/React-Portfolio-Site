// *****************************************************************************
// This is the MilitaryProjects Component.
// Goes to ==> Military.js Component
// Images need to be 600w x 300h for best look
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import React, { Component } from "react";
import ceis101 from "../../download/CEIS101_FinalProject_Jeremy-Duncan.pptx";
import ceis150 from "../../download/CEIS150_FinalProject_Jeremy-Duncan.pptx";
import netw211 from "../../download/NETW211_FinalProject_Jeremy-Duncan.pptx";
import phys204 from "../../download/PHYS204_FinalProject_Jeremy-Duncan.pptx";
import sec285 from "../../download/SEC285_FinalProject_Jeremy-Duncan.pptx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class MilitaryProjects extends Component {
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
              Military Training
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
              Military Training
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
              My Training From The US Navy
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
              My Training From The US Navy
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
                width: "500px",
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
              flexWrap: "wrap",
            }}
            ml={1}
            pb={5}
            pr={2}
            pl={3}
          >
            <Grid item xs={5} sm={5} md={2.5} lg={2.5} xl={2.5}>
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ===*/}
                <Image
                  src={require("../../images/military-images/me1.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>
            <Grid item xs={5} sm={5} md={2.5} lg={2.5} xl={2.5}>
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ===*/}
                <Image
                  src={require("../../images/military-images/me2.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>
            <Grid item xs={6.5} sm={6.5} md={3.3} lg={3.3} xl={3.3}>
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ===*/}
                <Image
                  src={require("../../images/military-images/honor_guard.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>
            <Grid item xs={3.6} sm={3.6} md={1.84} lg={1.84} xl={1.84}>
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ===*/}
                <Image
                  src={require("../../images/military-images/me_hillary_clinton.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>
          </Grid>

          {/*//================= PICTURE GRID END =========================> */}
          <Grid
            elevation={24}
            mb={5}
            ml={1.2}
            xs={10}
            xl={11}
            sx={{
              height: "1px",
              border: "2px solid gray",
              borderRadius: "20px",
            }}
          />

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/*//============= Security SCHOOL GRID BOX ===================> */}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              ml={1}
              pb={2.5}
            >
              <Grid
                item
                ml={1}
                xs={10}
                sm={10}
                md={11}
                lg={12}
                xl={12}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Item elevation={12}>
                  <Typography
                    pl={3}
                    pr={3}
                    sx={{
                      color: "#004787",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                    }}
                  >
                    Security Reaction Force Advanced
                  </Typography>
                  <Typography
                    sx={{
                      color: "#2c2d30",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontSize: { xs: ".8rem", sm: ".9rem", md: "1.1rem" },
                      textAlign: "center",
                    }}
                    pb={0.5}
                  >
                    Academi- Southwest — 2016
                    <br />
                    San Diego, CA
                  </Typography>
                </Item>
              </Grid>
            </Grid>
            {/*//========================= GRID END =========================> */}

            {/*//========= Security basic SCHOOL GRID BOX =================> */}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              ml={1}
              pb={2.5}
            >
              <Grid
                item
                ml={1}
                xs={10.2}
                sm={10}
                md={11}
                lg={12}
                xl={12}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Item elevation={12}>
                  <Typography
                    pl={3}
                    pr={3}
                    sx={{
                      color: "#004787",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                    }}
                  >
                    Armed Sentry/Security Reaction Force- Basic 
                  </Typography>
                  <Typography
                    sx={{
                      color: "#424447",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontSize: { xs: ".8rem", sm: "1.1rem", md: "1.1rem" },
                    }}
                    pb={0.5}
                  >
                    Academi- Southwest — 2016
                    <br />
                    San Diego, CA
                  </Typography>
                </Item>
              </Grid>
            </Grid>
            {/*//========================= GRID END =======================> */}

            {/*//=============SGSI SCHOOL GRID BOX ========================> */}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              ml={1}
              pb={2.5}
            >
              <Grid
                item
                ml={1}
                xs={10}
                sm={10}
                md={11}
                lg={12}
                xl={12}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Item elevation={12}>
                  <Typography
                    pl={3}
                    pr={3}
                    sx={{
                      color: "#004787",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                    }}
                  >
                    Stabilized Glide Slope Indicator and Wave Off Light System
                    Maintenance
                  </Typography>
                  <Typography
                    sx={{
                      color: "#2c2d30",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontSize: { xs: ".8rem", sm: "1.1rem", md: "1.1rem" },
                    }}
                    pb={0.5}
                  >
                    Center for Naval Aviation Technical Training Unit, North
                    Island — 2016
                    <br />
                    San Diego, CA
                  </Typography>
                </Item>
              </Grid>
            </Grid>
            {/*//========================= GRID END =======================> */}

            {/*//============= Security SCHOOL GRID BOX =====================> */}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              ml={1}
              pb={2.5}
            >
              <Grid
                item
                ml={1}
                xs={10}
                sm={10}
                md={11}
                lg={12}
                xl={12}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Item elevation={12}>
                  <Typography
                    pl={3}
                    pr={3}
                    sx={{
                      color: "#004787",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                    }}
                  >
                    Stabilized Glide Slope Indicator and Wave Off Light System
                    Maintenance
                  </Typography>
                  <Typography
                    sx={{
                      color: "#2c2d30",
                      textShadow: "1.5px 1.5px 4px lightgrey",
                      fontSize: { xs: ".8rem", sm: "1.1rem", md: "1.1rem" },
                    }}
                    pb={0.5}
                  >
                    Center for Naval Aviation Technical Training Unit, North
                    Island — 2016
                    <br />
                    San Diego, CA
                  </Typography>
                </Item>
              </Grid>
            </Grid>
            {/*//========================= GRID END =======================> */}
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default MilitaryProjects;
