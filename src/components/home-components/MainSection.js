import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { ExpandMoreIcon, MilitaryTechIcon, SchoolIcon, TerminalIcon, VerifiedIcon, WorkIcon } from "../../mui-icons";
import Certifications from "./main-section-components/Certifications";
import College from "./main-section-components/College";
import MilitaryExp from "./main-section-components/MilitaryExp";
import Projects from "./main-section-components/Projects";
import Skills from "./main-section-components/Skills";

const sections = [
  {
    panel: "panel1",
    title: "Skills",
    icon: <TerminalIcon sx={{ verticalAlign: "middle", marginRight: 1 }} />,
    component: <Skills />,
  },
  {
    panel: "panel2",
    title: "Portfolio Projects",
    icon: <WorkIcon sx={{ verticalAlign: "middle", marginRight: 1 }} />,
    component: <Projects />,
  },
  {
    panel: "panel3",
    title: "College Education",
    icon: <SchoolIcon sx={{ verticalAlign: "middle", marginRight: 1 }} />,
    component: <College />,
  },
  {
    panel: "panel4",
    title: "Certifications",
    icon: <VerifiedIcon sx={{ verticalAlign: "middle", marginRight: 1 }} />,
    component: <Certifications />,
  },
  {
    panel: "panel5",
    title: "Military Experience",
    icon: <MilitaryTechIcon sx={{ verticalAlign: "middle", marginRight: 1 }} />,
    component: <MilitaryExp />,
  },
];

const MainSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel, title) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

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

  return (
    <div>
      {sections.map((section) => (
        <Accordion
          key={section.panel}
          className="ga-btn"
          sx={{ bgcolor: "primary.dark", color: "contrast.textLight" }}
          expanded={expanded === section.panel}
          onChange={handleChange(section.panel, section.title)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
            aria-controls={`${section.panel}bh-content`}
            id={`${section.panel}bh-header`}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textShadow: "1.5px 1.5px 4px #292727",
                  flexShrink: 0,
                  fontWeight: "bold",
                  marginLeft: 1,
                }}
              >
                {section.icon} {section.title}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background:
                "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
              color: "contrast.textDark",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            {section.component}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default MainSection;
