// *****************************************************************************
// This component displays the Projects I've completed
// Goes to ==> MainSection.js Component
// Images need to be 300*300px
// *****************************************************************************
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
import Image from "mui-image";
import React, { useState } from 'react';
import { CodeIcon, ExpandMoreIcon, OndemandVideoIcon } from "../../../mui-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const projects = [
  {
    panel: "panel1",
    title: "Wildflower Designs",
    image: require("../../../images/wildflower-design.webp"),
    description: "This is a Ruby on Rails application for selling arts and crafts style merchandise. Technologies used include JavaScript, Slim, jQuery, HTML, CSS, SCSS, Ruby, Ruby on Rails, AWS, PostgreSQL, and AI generated images.",
    demoLink: "https://www.wild-flower-designs.com",
    sourceLink: "https://github.com/JeremyDuncan/wildflower_designs"
  },
  {
    panel: "panel2",
    title: "Cosmic Defender",
    image: require("../../../images/cosmic-defender.webp"),
    description: "This is a Ruby on Rails application. Technologies used include JavaScript, Phaser.js, Slim, jQuery, HTML, CSS, Ruby, Ruby on Rails, and PostgreSQL.",
    demoLink: "https://cosmicdefender.jeremyd.net",
    sourceLink: "https://github.com/JeremyDuncan/CosmicDefender"
  },
  {
    panel: "panel3",
    title: "Equipment Checkout System",
    image: require("../../../images/ecs.webp"),
    description: "This is a Ruby on Rails application. Technologies used include JavaScript, Slim, jQuery, Minio(S3 buckets), HTML, CSS, Ruby, Ruby on Rails, and PostgreSQL.",
    demoLink: "https://ecs.jeremyd.net",
    sourceLink: "https://github.com/JeremyDuncan/EquipmentCheckoutSystem"
  },
  {
    panel: "panel4",
    title: "Cat Tinder",
    image: require("../../../images/cat-tinder.webp"),
    description: "This is a Ruby on Rails application. Technologies used include JavaScript, React.js, Slim, jQuery, Minio(S3 buckets), ReactStrap, HTML, CSS, SASS, Ruby, Ruby on Rails, and PostgreSQL.",
    demoLink: "https://cattinder.jeremyd.net/",
    sourceLink: "https://github.com/JeremyDuncan/cat-tinder-frontend-higher-order-coders"
  },
  {
    panel: "panel5",
    title: "Business Website",
    image: require("../../../images/Willis_Deluxe_Detail_Logo.webp"),
    description: "This is a website I created for a family member's car detailing business using React and Material UI.",
    demoLink: "https://www.willisdeluxedetailing.com",
    sourceLink: "https://github.com/JeremyDuncan/car-detailing-website"
  },
  {
    panel: "panel6",
    title: "BattleShip Game",
    image: require("../../../images/battleship_Screenshot.webp"),
    description: "This is a battleship game I created using HTML, CSS, and JavaScript. Contains a custom AI to make it more challenging.",
    demoLink: "https://jeremyduncan.github.io/Battleship/",
    sourceLink: "https://github.com/JeremyDuncan/Battleship"
  },
  {
    panel: "panel7",
    title: "Tic-Tac-Toe Game",
    image: require("../../../images/tic-tac-toe.webp"),
    description: "This is a game I created using the React library and Material-UI CSS framework.",
    demoLink: "https://jeremyduncan.github.io/tic-tac-toe/",
    sourceLink: "https://github.com/JeremyDuncan/tic-tac-toe"
  },
  {
    panel: "panel28",
    title: "Pig Latin Translator",
    image: require("../../../images/pig.webp"),
    description: "This app translates English to pig latin. I used React.js and Material-UI for this project.",
    demoLink: "https://jeremyduncan.github.io/pig-latin-converter/",
    sourceLink: "https://github.com/JeremyDuncan/pig-latin-converter"
  },
  {
    panel: "panel8",
    title: "Markdown Previewer",
    image: require("../../../images/markup_editor_screenshot.webp"),
    description: "This app allows you to see your HTML and CSS updates real-time.",
    demoLink: "https://jeremyduncan.github.io/React-Markdown-Previewer/",
    sourceLink: "https://github.com/JeremyDuncan/React-Markdown-Previewer"
  },
  {
    panel: "panel9",
    title: "Drum Machine",
    image: require("../../../images/drum-machine_screenshot.webp"),
    description: "This is a drum machine program I created using HTML, CSS, JavaScript and the React.js library.",
    demoLink: "https://jeremyduncan.github.io/drum-machine/",
    sourceLink: "https://github.com/JeremyDuncan/drum-machine"
  },
  {
    panel: "panel10",
    title: "Calculator",
    image: require("../../../images//calculator_screenshot.webp"),
    description: "This is a calculator I created using JavaScript, HTML, CSS, and the React.js library.",
    demoLink: "https://jeremyduncan.github.io/Calculator/",
    sourceLink: "https://github.com/JeremyDuncan/Calculator"
  },
  {
    panel: "panel11",
    title: "25 + 5 Clock",
    image: require("../../../images/clock_screenshot.webp"),
    description: "This is a timer I made that counts down work session time and break times using JavaScript, HTML, and CSS with the React.js library.",
    demoLink: "https://jeremyduncan.github.io/25-Plus-5-Clock/",
    sourceLink: "https://github.com/JeremyDuncan/25-Plus-5-Clock"
  },
  {
    panel: "panel12",
    title: "Food Decision Maker",
    image: require("../../../images/Portfolio_screenshot_D-M.webp"),
    description: "This is an app I created to help make a decision when it comes to food. I used JavaScript, HTML, CSS, and the React.js library.",
    demoLink: "https://jeremyduncan.github.io/decision-maker/",
    sourceLink: "https://github.com/JeremyDuncan/decision-maker"
  },
  {
    panel: "panel13",
    title: "Quote Generator",
    image: require("../../../images/quote-gen_screenshot.webp"),
    description: "This is a React app I made that generates a random motivational quote.",
    demoLink: "https://jeremyduncan.github.io/Quote-Generator/",
    sourceLink: "https://github.com/JeremyDuncan/Quote-Generator"
  },
  {
    panel: "panel14",
    title: "Light-Switch",
    image: require("../../../images/light_switch.webp"),
    description: "This is a React app I made that allows you to create or remove any number of lightswitches and independently flip the light on or off on each one.",
    demoLink: "https://jeremyduncan.github.io/images-jeremy/",
    sourceLink: "https://github.com/JeremyDuncan/images-jeremy"
  },
  {
    panel: "panel16",
    title: "Robot Translator",
    image: require("../../../images/robot-translator.webp"),
    description: "This takes a user's input and outputs it on each individual robot module and then modifies it based on module parameters.",
    demoLink: "https://jeremyduncan.github.io/inputs-jeremy/",
    sourceLink: "https://github.com/JeremyDuncan/inputs-jeremy"
  },
  {
    panel: "panel17",
    title: "Treasure Hunt",
    image: require("../../../images/treasurehunt.webp"),
    description: "A game I created where the player has to find the treasure to win. The player loses if they find the bomb.",
    demoLink: "https://jeremyduncan.github.io/treasure_hunt/",
    sourceLink: "https://github.com/JeremyDuncan/treasure_hunt"
  },
];

const Projects = () => {
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleChangePanel = (panel, title) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);

    // Send event to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'accordion_click', {
        event_category: 'Accordion',
        event_label: title,
        value: isExpanded ? 1 : 0,
      });
    } else {
      console.error("gtag not found on window object");
    }
  };

  const handleButtonClick = (label) => {
    // Send event to Google Analytics
    if (window.gtag) {
      window.gtag('event', 'button_click', {
        event_category: 'Button',
        event_label: label,
      });
    } else {
      console.error("gtag not found on window object");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        {projects.map((project) => (
          <Grid item xs={11} md={3.5} key={project.panel}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image src={project.image} />
              <Accordion 
                expanded={expandedPanel === project.panel} 
                onChange={handleChangePanel(project.panel, project.title)}
                sx={{ bgcolor: "primary.dark" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
                  aria-controls={`${project.panel}a-content`}
                  id={`${project.panel}a-header`}
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
                    {project.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ bgcolor: "secondary.main" }}
                >
                  <Typography
                    sx={{
                      color: "contrast.textDark",
                      textShadow: "0px 3px 8px #8a8a8a",
                    }}
                    textAlign="left"
                  >
                    {project.description}
                  </Typography>
                  <br />
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
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener"
                      variant="contained"
                      endIcon={<OndemandVideoIcon />}
                      onClick={() => handleButtonClick(`${project.title} Demo`)}
                    >
                      Demo
                    </Button>
                    <Button
                      className="ga-btn"
                      sx={{ color: "button.textLight" }}
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener"
                      variant="contained"
                      endIcon={<CodeIcon />}
                      onClick={() => handleButtonClick(`${project.title} Source`)}
                    >
                      Source
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
