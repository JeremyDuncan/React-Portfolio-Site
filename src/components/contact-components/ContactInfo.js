// *****************************************************************************
// This is the DevryProjects Component.
// Goes to ==> Devry.js Component
// Images need to be 600w x 300h for best look
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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

class ContactInfo extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="column"
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
                width: { xs: "350px", md: "500px" },
                borderRadius: "20px",
                marginBottom: { xs: "3rem", sm: "3rem" },
              }}
            />
          </Grid>
          {/*//========================= Pictures GRID BOX ================> */}
          <Grid
            sx={{
              gap: { xs: ".3rem", sm: ".3rem", md: "1rem", xl: "1rem" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: { xs: "0rem", md: "1rem" },
            }}
          >
            <Grid item xs={6} sm={6} md={5} lg={5} xl={5}>
              {/*==> Image Link <== ===*/}
              <Image
                src={require("../../images/Jeremy_duncan_logo_React.webp")}
                sx={{ borderRadius: "5px" }}
                shift="bottom"
                distance={400}
              />
            </Grid>
          </Grid>
          {/*//================= PICTURE GRID END =========================> */}

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: "3.2rem",
              pb: "30rem",
              gap: "1rem",
            }}
          >
            <Item sx={{ bgcolor: "darkGrey", borderRadius: "150px" }}>
              <Button
                className="headerLink"
                href="tel:770-309-2046"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <PhoneIcon fontSize="large" />
              </Button>

              <Button
                className="headerLink"
                href="mailto:jeremy.duncan1984@gmail.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <EmailRoundedIcon fontSize="large" />
              </Button>
              <Button
                className="headerLink"
                href="https://www.linkedin.com/in/jeremy-duncan2021/"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <LinkedInIcon fontSize="large" />
              </Button>
              <Button
                className="headerLink"
                href="https://github.com/JeremyDuncan"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <GitHubIcon fontSize="large" />
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default ContactInfo;
