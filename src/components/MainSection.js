// *****************************************************************************
// This component has the accordion section that holds the section components
// Goes to ==> Portfolio.js Component
// *****************************************************************************

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TerminalIcon from "@mui/icons-material/Terminal";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects";
import Languages from "./Languages";
import College from "./College";
import MilitaryExp from "./MilitaryExp";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === ABOUT ME SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "contrast.textLight" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              textShadow: "1.5px 1.5px 4px #292727",
              width: "33%",
              flexShrink: 0,
              fontWeight: "bold",
              margin: { md: "auto", lg: "auto", sm: "auto" },
            }}
          >
            About Me
          </Typography>
          {/* </Box> */}
        </AccordionSummary>
        <AccordionDetails
          sx={{ background: "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)", color: "primary.contrastText" }}
        >
          <AboutMe />
          {/* <=={COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === PROGRAMMING LANGUAGE SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "contrast.textLight" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              textShadow: "1.5px 1.5px 4px #292727",
              width: "33%",
              flexShrink: 0,
              fontWeight: "bold",
              margin: { md: "auto", lg: "auto", sm: "auto" },
            }}
          >
            Programming Languages
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            background: "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
            color: "contrast.textDark",
            textShadow: "0px 3px 8px #8a8a8a",
          }}
        >
          <Typography variant="h6" sx={{ paddingBottom: 2, paddingTop: 2 }}>
            <TerminalIcon sx={{ verticalAlign: "center", fontSize: "large" }} />
            &nbsp; Languages and Technologies Used
          </Typography>
          <Languages /> {/* <=={COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === COLLEGE EDUCATION SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "contrast.textLight" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              textShadow: "1.5px 1.5px 4px #292727",
              width: "33%",
              flexShrink: 0,
              fontWeight: "bold",
              margin: { md: "auto", lg: "auto", sm: "auto" },
            }}
          >
            College Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ background: "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)", color: "primary.contrastText" }}
        >
          <College /> {/* <=={COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === MILITARY EXPERIENCE SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "contrast.textLight" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              textShadow: "1.5px 1.5px 4px #292727",
              width: "33%",
              flexShrink: 0,
              fontWeight: "bold",
              margin: { md: "auto", lg: "auto", sm: "auto" },
            }}
          >
            Military Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ background: "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)", color: "primary.contrastText" }}
        >
          <MilitaryExp />
          {/* <=={COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === PORTFOLIO SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "contrast.textLight" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              textShadow: "1.5px 1.5px 4px #292727",
              width: "33%",
              flexShrink: 0,
              fontWeight: "bold",
              margin: { md: "auto", lg: "auto", sm: "auto" },
            }}
          >
            My Portfolio Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ background: "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)", color: "primary.contrastText" }}
        >
          <Typography sx={{ paddingBottom: 2 }}></Typography>
          <Projects /> {/* <=={COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
    </div>
  );
}
