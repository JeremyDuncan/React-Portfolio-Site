// *****************************************************************************
// This component displays the Accordion functions that display the portfolio sections
// Imported to Portfolio.js Component ==>
// *****************************************************************************

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import CircleIcon from "@mui/icons-material/Circle";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import TerminalIcon from "@mui/icons-material/Terminal";
import MyResume from "./Jeremy_Duncan_Resume_All-11July2022.pdf";
import Projects from "./Projects";
import Languages from "./Languages";
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
      {/* =============== === ABOUT ME SECTION === ==========================*/}
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
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
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
      {/* ======== === PROGRAMMING LANGUAGE SECTION === =====================*/}
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
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
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
          <Languages /> {/* <<-========= Language Component ===============> */}

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
      {/* ========== === COLLEGE EDUCATION SECTION === ======================*/}
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
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            College Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <Typography variant="h7">
            <p>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; Associate of Applied Science - Information Technology and
              Networking
              <br />
              <Typography variant="h9" color="text.secondary">
                – DeVry University 2022 - June-2022
                <br />
                – Grade: 4.0 GPA, Deans List Awardee
                <br />
                – Nominated for the National Society of Leadership and Success
                <br />– Nominated for the Alpha Chi Honor Society
              </Typography>
            </p>
            <p>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; Bachelor of Science - Computer Information Systems and
              Software Programming Candidate
              <br />
              <Typography variant="h9" color="text.secondary">
                – DeVry University 2022 - November 2023 (Projected)
                <br />
                – Grade: 4.0 GPA, Deans List Awardee
                <br />
                – Nominated for the National Society of Leadership and Success
                <br />– Nominated for the Alpha Chi Honor Society
              </Typography>
            </p>
          </Typography>
          <br />
          <Button
            href="https://www.jeremy-duncan.com/devry-projects/devry.html"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<SchoolRoundedIcon />}
          >
            Visit My College Project Page
          </Button>
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}

      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* ========== === MILITARY EXPERIENCE SECTION === ====================*/}
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
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            Military Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <Typography variant="h7">
            Here are a few responisbilities I had in the US Navy.
            <h4>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; Electronics Technician
            </h4>
            <h4>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; Work Center Supervisor
            </h4>
            <h4>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; Radar Technician
            </h4>
            <h4>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; 2M Micro-Miniature Repair Technician
            </h4>
            <h4>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; Information Systems Technician
            </h4>
            <h4>
              <CircleIcon sx={{ verticalAlign: "center", fontSize: "small" }} />
              &nbsp; US Navy Instructor
            </h4>
          </Typography>
          <br />
          <Button
            href="https://jeremy-duncan.notion.site/Jeremy-Duncan-s-Military-Experience-7abdbb418a6b40e7b2abd161eed48cda"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<MilitaryTechRoundedIcon />}
          >
            See My Military Experience
          </Button>
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}

      {/* =============== === ACCORDIAN START === ===========================*/}
      {/* ============== === PORTFOLIO SECTION === ==========================*/}
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
          <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: "bold" }}>
            My Portfolio Projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <Typography sx={{ paddingBottom: 2 }}>
            These are some of my projects.
          </Typography>
          {/*=== ===*/}
          <Projects /> {/*<== === === === === === === === === === {COMPONENT} */}
          {/*=== ===*/}
        </AccordionDetails>
      </Accordion>
      {/* =============== === ACCORDIAN END === =============================*/}
    </div>
  );
}