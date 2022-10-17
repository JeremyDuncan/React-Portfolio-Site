// *****************************************************************************
// This component displays the Projects I've completed
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Projects = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/Willis_Deluxe_Detail_Logo.jpg")} />
            <Accordion sx={{ bgcolor: "primary.dark" }}>
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
                    justifyContent: "center"
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
                >
                  This is a website I created for a family member's car
                  detailing business using React and Material UI.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://www.willisdeluxedetailing.com"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This is a battleship game I created using HTML, CSS, and
                  JavaScript. Contains a custom AI to make it more challenging.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  href="https://jeremyduncan.github.io/Battleship/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
            <Accordion sx={{ bgcolor: "primary.dark" }}>
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
                    justifyContent: "center"
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
                >
                  This is a game I created using the React library and
                  Material-UI CSS framework.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://www.jeremyduncan.tech/tic-tac-toe/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
            <Accordion sx={{ bgcolor: "primary.dark" }}>
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
                    justifyContent: "center"
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
                >
                  This app translates english to pig latin. I used React.js and
                  Material-UI for this project.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://www.jeremyduncan.tech/pig-latin-converter/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This app allows you to see your HTML and CSS updates
                  real-time.
                </Typography>{" "}
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  href="https://jeremyduncan.github.io/React-Markdown-Previewer/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This is a drum machine program I created using HTML, CSS,
                  JavaScript and the React.js library.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/drum-machine/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This is a calculator I created using JavaScript, HTML, CSS,
                  and the React.js library.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/Calculator/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This is timer I made that counts down work session time and
                  break times using Javascript, HTML, and CSS with the React.js
                  library.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/25-Plus-5-Clock/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This is an app I created to help make a decision when it comes
                  food. I used JavaScript, HTML, and CSS, and the React.js
                  library.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/decision-maker/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This is a React app I made that generates a random
                  motivational quote.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/Quote-Generator/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This is a React app I made that allows you to create or remove
                  any number of lightswitches and independently flip the light
                  on or off on each one.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/images-jeremy/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  This takes a user's input and outputs it on each individual
                  robot module and then modifies it based on module parameters.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/inputs-jeremy/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
                    justifyContent: "center"
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
                >
                  A game I created where the player has to find the treasure to
                  win. The player loses if they find the bomb.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://www.jeremyduncan.tech/treasure_hunt/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/mad-libs.webp")} />
            <Accordion
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
                    justifyContent: "center"
                  }}
                >
                  Mad Libs
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
                >
                  This is a React app I created that takes the inputs of the
                  user and turns it into a mad lib.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/forms-jeremy/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>
        {/*//========================= GRID END ===================================> */}
        {/*//========================= GRID BOX ===================================> */}
        <Grid item xs={11} md={3.5}>
          <Item sx={{ bgcolor: "primary.main", color: "white" }}>
            {/*==> Image Link <== =========================================*/}
            <Image src={require("../images/rock_paper_scissors.webp")} />
            <Accordion
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
                    justifyContent: "center"
                  }}
                >
                  Rock Paper Scissors Game
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
                >
                  This is a rocks, paper, and scissors game I created using
                  HTML, CSS, and JavaScript.
                </Typography>
                <br />
                <Button
                  sx={{ color: "button.textLight" }}
                  /*==> URL Link <== =======================================*/
                  href="https://jeremyduncan.github.io/The-Odin-Project/Rock_Paper_Scissors/"
                  target="_blank"
                  rel="noopener"
                  variant="contained"
                  endIcon={<NavigateNextRoundedIcon />}
                >
                  Visit
                </Button>
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
