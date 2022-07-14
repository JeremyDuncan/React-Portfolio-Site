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
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import TerminalIcon from "@mui/icons-material/Terminal";
import MyResume from "./Jeremy_Duncan_Resume_All-11July2022.pdf";
import Projects from "./Projects";
import Languages from "./Languages";
import College from "./College";
import MilitaryExp from "./MilitaryExp";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
        sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontWeight: "bold",
              margin: { md: "auto", lg: "auto", sm: "auto" },
            }}
          >
            About Me
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <Typography>
            <p>
              I'm a highly motivated veteran that has over a decade of
              experience as an Electronic Technician and Network Administrator.
              I love solving problems and I work well with teams to accomplish
              projects.
            </p>
            <p>
              I've been in the process of transitioning from my military career
              to a new career as a Software Developer. During this transition I
              have been going to DeVry University full-time working towards a
              Bachelor's of Science in Computer Information Systems with a focus
              in Software Programming. I am interested in gaining real-world
              experience through internships and mentorship.
            </p>
            <p>Thank you for taking the time to view my portfolio.</p>
          </Typography>
          <Button
            href={MyResume}
            download
            variant="contained"
            endIcon={<AssignmentIndRoundedIcon />}
          >
            Download My Resume
          </Button>
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === PROGRAMMING LANGUAGE SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
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
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <Typography variant="h6" sx={{ paddingBottom: 2, paddingTop: 2 }}>
            <TerminalIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
            &nbsp; Languages and Technologies Used
          </Typography>
          <Languages /> {/*<== === === === === === === === === ===  {COMPONENT} */}
          <br />
          <Button
            href="https://github.com/JeremyDuncan"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<GitHubIcon />}
          >
            Visit my GitHub
          </Button>
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === COLLEGE EDUCATION SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
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
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <College /> {/*<== === === === === === === === === === {COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === MILITARY EXPERIENCE SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
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
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <MilitaryExp /> {/*<== === === === === === === === === === {COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* === PORTFOLIO SECTION === */}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
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
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <Typography sx={{ paddingBottom: 2 }}>
            These are some of my projects.
          </Typography>
          <Projects /> {/*<== === === === === === === === === === {COMPONENT} */}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
    </div>
  );
}