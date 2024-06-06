// *****************************************************************************
// This component displays the Projects I've completed
// Goes to ==> MainSection.js Component
// Images need to be 300*300px
// *****************************************************************************
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
import Image from "mui-image";
import React, { useState } from 'react';
import { CodeIcon, ExpandMoreIcon, OndemandVideoIcon } from "../mui-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Projects = () => {
  const [expandedPanel, setExpandedPanel] = useState(false);
  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/wildflower-design.webp")} />
            <Accordion 
            expanded={expandedPanel === 'panel1'} 
            onChange={handleChangePanel('panel1')}
            sx={{ bgcolor: "primary.dark" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className="ga-btn"
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Wildflower Designs
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This a Ruby on Rails application for selling arts and crafts style merchandise. Technologies used include JavaScript, Slim, jQuery, HTML, CSS, SCSS, Ruby, Ruby on Rails, AWS, PostgreSQL, and AI generated images.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className="ga-btn"
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://www.wild-flower-designs.com"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    className="ga-btn"
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/wildflower_designs"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/cosmic-defender.webp")} />
            <Accordion 
            expanded={expandedPanel === 'panel2'} 
            onChange={handleChangePanel('panel2')}
            sx={{ bgcolor: "primary.dark" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className="ga-btn"
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Cosmic Defender
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This a Ruby on Rails application. Technologies used include JavaScript, Phaser.js, Slim, jQuery, HTML, CSS, Ruby, Ruby on Rails, and PostgreSQL.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className="ga-btn"
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://cosmicdefender.jeremyd.net"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    className="ga-btn"
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/CosmicDefender"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/ecs.webp")} />
            <Accordion 
            expanded={expandedPanel === 'panel3'} 
            onChange={handleChangePanel('panel3')}
            sx={{ bgcolor: "primary.dark" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className="ga-btn"
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Equipment Checkout System
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This a Ruby on Rails application. Technologies used include JavaScript, Slim, jQuery, Minio(S3 buckets), HTML, CSS, Ruby, Ruby on Rails, and PostgreSQL.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className="ga-btn"
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://ecs.jeremyd.net"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    className="ga-btn"
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/EquipmentCheckoutSystem"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/cat-tinder.webp")} />
            <Accordion 
            expanded={expandedPanel === 'panel4'} 
            onChange={handleChangePanel('panel4')}
            sx={{ bgcolor: "primary.dark" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className="ga-btn"
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Cat Tinder
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This a Ruby on Rails application. Technologies used include JavaScript, React.js, Slim, jQuery, Minio(S3 buckets), ReactStrap, HTML, CSS, SASS, Ruby, Ruby on Rails, and PostgreSQL.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    className="ga-btn"
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://cattinder.jeremyd.net/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    className="ga-btn"
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/cat-tinder-frontend-higher-order-coders"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/Willis_Deluxe_Detail_Logo.webp")} />
            <Accordion 
            expanded={expandedPanel === 'panel5'} 
            onChange={handleChangePanel('panel5')}
            sx={{ bgcolor: "primary.dark" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className="ga-btn"
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Business Website
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is a website I created for a family member's car
                  detailing business using React and Material UI.
                </Typography>
                <br />

                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://www.willisdeluxedetailing.com"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/car-detailing-website"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image src={require("../images/battleship_Screenshot.webp")} />
            {/* =============== === ACCORDIAN START === ===================*/}
            <Accordion
              expanded={expandedPanel === 'panel6'} 
              onChange={handleChangePanel('panel6')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  BattleShip Game
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is a battleship game I created using HTML, CSS, and
                  JavaScript. Contains a custom AI to make it more challenging.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/Battleship/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/Battleship"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
            {/* =============== === ACCORDIAN END === =====================*/}
          </Item>
        </Grid>
        {/*//=========== GRID END =======================================> */}

        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/tic-tac-toe.webp")} />
            <Accordion 
            expanded={expandedPanel === 'panel7'} 
            onChange={handleChangePanel('panel7')}
            sx={{ bgcolor: "primary.dark" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Tic-Tac-Toe Game
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is a game I created using the React library and
                  Material-UI CSS framework.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/tic-tac-toe/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/tic-tac-toe"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}

              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/pig.webp")} />
            <Accordion 
            expanded={expandedPanel === 'panel28'} 
            onChange={handleChangePanel('panel28')}
            sx={{ bgcolor: "primary.dark" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Pig Latin Translator
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This app translates english to pig latin. I used React.js and
                  Material-UI for this project.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/pig-latin-converter/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/pig-latin-converter"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image src={require("../images/markup_editor_screenshot.webp")} />
            {/* =============== === ACCORDIAN START === =================*/}
            <Accordion
              expanded={expandedPanel === 'panel8'} 
              onChange={handleChangePanel('panel8')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Markdown Previewer
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This app allows you to see your HTML and CSS updates
                  real-time.
                </Typography>{" "}
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/React-Markdown-Previewer/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/React-Markdown-Previewer"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}

              </AccordionDetails>
            </Accordion>
            {/* =============== === ACCORDIAN END === =====================*/}
          </Item>
        </Grid>
        {/*//=========== GRID END =======================================> */}
        {/*//=========== GRID BOX START =================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/drum-machine_screenshot.webp")} />
            {/* =============== === ACCORDIAN START === ===================*/}
            <Accordion
              expanded={expandedPanel === 'panel9'} 
              onChange={handleChangePanel('panel9')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Drum Machine
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is a drum machine program I created using HTML, CSS,
                  JavaScript and the React.js library.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/drum-machine/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/drum-machine"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images//calculator_screenshot.webp")} />
            <Accordion
              expanded={expandedPanel === 'panel10'} 
              onChange={handleChangePanel('panel10')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Calculator
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is a calculator I created using JavaScript, HTML, CSS,
                  and the React.js library.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/Calculator/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/Calculator"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/clock_screenshot.webp")} />
            <Accordion
              expanded={expandedPanel === 'panel11'} 
              onChange={handleChangePanel('panel11')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  25 + 5 Clock
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is timer I made that counts down work session time and
                  break times using Javascript, HTML, and CSS with the React.js
                  library.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/25-Plus-5-Clock/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/25-Plus-5-Clock"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/Portfolio_screenshot_D-M.webp")} />
            <Accordion
              expanded={expandedPanel === 'panel12'} 
              onChange={handleChangePanel('panel12')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Food Decision Maker
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is an app I created to help make a decision when it comes
                  food. I used JavaScript, HTML, and CSS, and the React.js
                  library.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/decision-maker/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/decision-maker"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/quote-gen_screenshot.webp")} />
            <Accordion
              expanded={expandedPanel === 'panel13'} 
              onChange={handleChangePanel('panel13')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Quote Generator
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is a React app I made that generates a random
                  motivational quote.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/Quote-Generator/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/Quote-Generator"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}

              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/light_switch.webp")} />
            <Accordion
              expanded={expandedPanel === 'panel14'} 
              onChange={handleChangePanel('panel14')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Light-Switch
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This is a React app I made that allows you to create or remove
                  any number of lightswitches and independently flip the light
                  on or off on each one.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/images-jeremy/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/images-jeremy"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}

              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/robot-translator.webp")} />
            <Accordion
              expanded={expandedPanel === 'panel16'} 
              onChange={handleChangePanel('panel16')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Robot Translator
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  This takes a user's input and outputs it on each individual
                  robot module and then modifies it based on module parameters.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/inputs-jeremy/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/inputs-jeremy"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/treasurehunt.webp")} />
            <Accordion
              expanded={expandedPanel === 'panel17'} 
              onChange={handleChangePanel('panel17')}
              sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "contrast.textLight" }} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    display: "flex",
                    color: "contrast.textLight",
                    textShadow: "1.5px 1.5px 4px #292727",
                    height: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Treasure Hunt
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                {/*==> Description Text <== ===============================*/}
                <Typography
                  sx={{
                    color: "contrast.textDark",
                    textShadow: "0px 3px 8px #8a8a8a",
                  }}
                  textAlign="left"
                >
                  A game I created where the player has to find the treasure to
                  win. The player loses if they find the bomb.
                </Typography>
                <br />
                {/* ==================== RESPONSIVE BUTTON SECTION ================== */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    },
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "button.textLight",
                      width: "125px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    /*==> URL Link <== =======================================*/
                    href="https://jeremyduncan.github.io/treasure_hunt/"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<OndemandVideoIcon />}
                  >
                    Demo
                  </Button>
                  <Button
                    sx={{ color: "button.textLight" }}
                    /*==> URL Link <== =======================================*/
                    href="https://github.com/JeremyDuncan/treasure_hunt"
                    target="_blank"
                    rel="noopener"
                    variant="contained"
                    endIcon={<CodeIcon />}
                  >
                    Source
                  </Button>
                </Box>
                {/* ================================ RESP BUTTON END ============================= */}
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}

      </Grid>
    </Box>
  );
};
export default Projects;
