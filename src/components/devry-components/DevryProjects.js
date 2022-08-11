// *****************************************************************************
// This is the DevryProjects Component.
// Goes to ==> Devry.js Component
// Images need to be 600w x 300h for best look
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
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

class DevryProjects extends Component {
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
              DeVry Portfolio
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
              DeVry Portfolio
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
              My Projects From DeVry
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
              My Projects From DeVry
            </Typography>

            <Grid
              xs={6}
              sx={{
                height: "1px",
                border: {
                  xs: "4px solid gray",
                  sm: "4px solid gray",
                  md: "8px solid gray",
                },
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItem: "center",
                margin: "auto",
                width: "500px",
                borderRadius: "20px",
                marginBottom: "3rem",
              }}
            />
          </Grid>

          {/*//================== PHYSICS GRID BOX ========================> */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
            ml={1}
            pb={5}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={6}
              lg={5.5}
              xl={3.5}
              sx={{ pb: { xs: ".5rem", md: "0rem" } }}
            >
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ====*/}
                <Image
                  src={require("../../images/devry-images/phys.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>

            <Grid
              item
              xs={10}
              sm={10}
              md={5}
              lg={5.5}
              xl={3.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Item elevation={12}>
                <Typography
                  variant="h5"
                  p={2}
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                    fontWeight: "bold",
                  }}
                >
                  PHYS204 Final Project:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                  }}
                >
                  The Application of IoT Technology and Physics
                </Typography>
                <Typography
                  pl={3}
                  pr={3}
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  align="left"
                >
                  This is the final project for my DeVry class PHYS204. In this
                  project I will be demonstrating fundamental concepts of the
                  governing laws of physics by applying technologies from the
                  growing field of Internet of Things (IoT).
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  href="/"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  View Project
                </Button>
                <br />
                <br />
              </Item>
            </Grid>
          </Grid>
          {/*//========================= GRID END =========================> */}
          <Grid
            elevation={24}
            mb={5}
            ml={1.2}
            xs={10}
            sx={{ height: "1px", border: "2px solid gray" }}
          />
          {/*//============== CLOUD COMOUTING GRID BOX ====================> */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
            ml={1}
            pb={5}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={6}
              lg={5.5}
              xl={3.5}
              sx={{ pb: { xs: ".5rem", md: "0rem" } }}
            >
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ====*/}
                <Image
                  src={require("../../images/devry-images/aws.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>

            <Grid
              item
              xs={10}
              sm={10}
              md={5}
              lg={5.5}
              xl={3.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Item elevation={12}>
                <Typography
                  variant="h5"
                  p={2}
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                    fontWeight: "bold",
                  }}
                >
                  NETW211 Final Project:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                  }}
                >
                  Cloud Computing Fundamentals
                </Typography>
                <Typography
                  pl={3}
                  pr={3}
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  align="left"
                >
                  This is the final project for my DeVry class NETW211. In this
                  project I walk you through fundamental cloud computing
                  concepts while using Amazon Web Services (AWS).
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  href="/"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  View Project
                </Button>
                <br />
                <br />
              </Item>
            </Grid>
          </Grid>
          {/*//========================= GRID END =========================> */}
          <Grid
            elevation={24}
            mb={5}
            ml={1.2}
            xs={10}
            sx={{ height: "1px", border: "2px solid gray" }}
          />
          {/*//========================= IOT GRID BOX =====================> */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
            ml={1}
            pb={5}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={6}
              lg={5.5}
              xl={3.5}
              sx={{ pb: { xs: ".5rem", md: "0rem" } }}
            >
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ===*/}
                <Image
                  src={require("../../images/devry-images/IoT.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>

            <Grid
              item
              xs={10}
              sm={10}
              md={5}
              lg={5.5}
              xl={3.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Item elevation={12}>
                <Typography
                  variant="h5"
                  p={2}
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                    fontWeight: "bold",
                  }}
                >
                  CEIS101 Final Project:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                  }}
                >
                  IoT: Internet of Things
                </Typography>
                <Typography
                  pl={3}
                  pr={3}
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  align="left"
                >
                  This is the final project for my DeVry class CEIS101. In this
                  project I walk you through fundamental IoT concepts while
                  using Arduino components to make an automated home security
                  system.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  href="/"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  View Project
                </Button>
                <br />
                <br />
              </Item>
            </Grid>
          </Grid>
          {/*//========================= GRID END =========================> */}
          <Grid
            elevation={24}
            mb={5}
            ml={1.2}
            xs={10}
            sx={{ height: "1px", border: "2px solid gray" }}
          />
          {/*//========================= IOT GRID BOX =====================> */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
            ml={1}
            pb={5}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={6}
              lg={5.5}
              xl={3.5}
              sx={{ pb: { xs: ".5rem", md: "0rem" } }}
            >
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ===*/}
                <Image
                  src={require("../../images/devry-images/stock_tracker.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>

            <Grid
              item
              xs={10}
              sm={10}
              md={5}
              lg={5.5}
              xl={3.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Item elevation={12}>
                <Typography
                  variant="h5"
                  p={2}
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                    fontWeight: "bold",
                  }}
                >
                  CEIS150 Final Project:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                  }}
                >
                  Object Oriented Programming
                </Typography>
                <Typography
                  pl={3}
                  pr={3}
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  align="left"
                >
                  This is the final project for my DeVry class CEIS150. In this
                  project I walk you through a stock tracking program I created
                  using Python.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  href="/"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  View Project
                </Button>
                <br />
                <br />
              </Item>
            </Grid>
          </Grid>
          {/*//========================= GRID END =========================> */}
          <Grid
            elevation={24}
            mb={5}
            ml={1.2}
            xs={10}
            sx={{ height: "1px", border: "2px solid gray" }}
          />
          {/*//=============== Network Security GRID BOX ==================> */}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
            }}
            ml={1}
            pb={5}
          >
            <Grid
              item
              xs={10}
              sm={10}
              md={6}
              lg={5.5}
              xl={3.5}
              sx={{ pb: { xs: ".5rem", md: "0rem" } }}
            >
              <Item
                sx={{
                  bgcolor: "primary.secondary",
                }}
                elevation={12}
              >
                {/*==> Image Link <== ===*/}
                <Image
                  src={require("../../images/devry-images/CyberSecurity.webp")}
                  sx={{ borderRadius: "5px" }}
                />
              </Item>
            </Grid>

            <Grid
              item
              xs={10}
              sm={10}
              md={5}
              lg={5.5}
              xl={3.5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Item elevation={12}>
                <Typography
                  variant="h5"
                  p={2}
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                    fontWeight: "bold",
                  }}
                >
                  SEC285 Final Project:
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#004787",
                    textShadow: "1.5px 1.5px 4px lightgrey",
                  }}
                >
                  Information Security
                </Typography>
                <Typography
                  pl={3}
                  pr={3}
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  align="left"
                >
                  This is the final project for my DeVry class SEC285. In this
                  project I walk you through information security fundamentals.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  href="/"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  View Project
                </Button>
                <br />
                <br />
              </Item>
            </Grid>
          </Grid>
          {/*//========================= GRID END =========================> */}
        </Grid>
      </Box>
    );
  }
}
export default DevryProjects;
