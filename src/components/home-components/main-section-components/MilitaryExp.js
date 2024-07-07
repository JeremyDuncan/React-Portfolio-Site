// *****************************************************************************
// This component displays my Military Experience
// Goes to ==> MainSection.js Component
// *****************************************************************************
import { Box, Button, Collapse, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { AssignmentIndRoundedIcon, ExpandLessIcon, ExpandMoreIcon, MilitaryTechRoundedIcon } from "../../../mui-icons";
import React, { useState } from 'react';

const militaryExperiences = [
  {
    id: "WCS",
    title: "Work Center Supervisor",
    date: "United States Navy 2015 - 2018",
    responsibilities: [
      "Scheduled and supervised the accomplishment of weekly work center maintenance tasks. Ensured prompt documentation of all noted material deficiencies in the work center if required.",
      "Ensured maintenance personnel were trained and qualified to perform maintenance and work on designated equipment",
      "Analyzed and reported any maintenance requirements that were believed to be inadequate or excessive or when performance would cause a hazardous condition to exist; or replacement documents were required.",
    ],
  },
  {
    id: "LINK",
    title: "Electronics Data Systems Technician",
    date: "United States Navy 2015 - 2018",
    responsibilities: [
      "Maintained data link, inertial navigation, tactical network, message routing digital production/projection, calibration, fiber optics, micro-miniature module test and repair, computer-based, and peripheral computer systems.",
      "Analyzed equipment operation, established computer, and network configurations, and troubleshot and repaired computer-based equipment to the lowest replaceable unit.",
      "Executed casualty control procedures, restored operability for all assigned electronic equipment.",
    ],
  },
  {
    id: "IVCS",
    title: "Internal Voice Communication Technician",
    date: "United States Navy 2015 - 2018",
    responsibilities: [
      "Operated and performed installation, testing, troubleshooting, maintenance and repair of shipboard telephony systems and other digital telephone switching systems.",
      "Analyzed system faults, isolated, identified, and performed corrective actions as required ensuring 24-hours-a-day operation.",
    ],
  },
  {
    id: "IT",
    title: "Information System Maintenance Technician",
    date: "United States Navy 2012 - 2018",
    responsibilities: [
      "Performed organizational and system maintenance on end-to-end information systems.",
      "Experience working with Local and Wide Area Networks, Desktop Computers, Routers, Switches, and Satellite Communications (SATCOM).",
      "Knowledge in CompTia A+, CompTia Security+, MCDST XP, Video Switch technology, working knowledge in Windows NT, Windows XP, Windows 10, UNIX, and Image Deployments.",
    ],
  },
  {
    id: "INSTRUCTOR",
    title: "US Navy Instructor",
    date: "United States Navy 2011 - 2018",
    responsibilities: [
      "Qualified Navy instructor that directed teaching and learning activities in schools; training centers, and selected reserve units.",
      "Wrote learning objectives; prepared test items; evaluated instructional materials and results; and counseled students on academic learning problems.",
    ],
  },
  {
    id: "RADAR",
    title: "Electronics Radar Systems Technician",
    date: "United States Navy 2010 - 2018",
    responsibilities: [
      "Maintained surface search, air search, weather radar systems, radar video switchboards, synchro Identification Friend or Foe (IFF) equipment, and tactical air navigation equipment.",
      "Performed administrative functions that included updating casualty reporting messages, technical manuals, equipment maintenance records, and managing test equipment calibration requirements.",
      "Analyzed equipment operation and alignments, troubleshot, and repaired equipment to the lowest replaceable unit.",
    ],
  },
  {
    id: "GAGE",
    title: "Gage and Meter Calibrator",
    date: "United States Navy 2008 - 2018",
    responsibilities: [
      "Calibrated and maintained shipboard Pressure, Temperature, Electric Meter, and Torque Calibration.",
      "Ensured the proper operation, care, and maintenance of Shipboard Gage Calibration Program test equipment.",
      "Documented and tracked of multiple ship's calibration programs.",
    ],
  },
  {
    id: "2M",
    title: "2M Micro Miniature Repair Technician",
    date: "United States Navy 2007 - 2018",
    responsibilities: [
      "Experience with advanced soldering techniques, performing high quality and reliable solder connections on complex circuit card assemblies.",
      "Performed miniature electronic repairs to single-sided and double sided printed wiring boards (PWB).",
      "Repaired PWB laminate and conductor damage, removed and applied PWB conformal coating, and repaired multilayer, flexible, and plastic, panel-printed circuit boards.",
    ],
  },
  {
    id: "ET",
    title: "Electronics Technician",
    date: "United States Navy 2005 - 2018",
    responsibilities: [
      "Maintained shore-based, ship-based, and portable communications equipment, including all associated cabling, computer, multiplexing, switching, cryptographic, recording, cooling water, and dry air systems.",
      "Analyzed equipment operation and alignment, troubleshot, and repaired equipment to the lowest replaceable unit.",
      "Supervising personnel who conducted tool and test equipment inventories, logistics support, and maintenance and testing of systems and equipment.",
    ],
  },
];

const ExperienceItem = ({ experience, isOpen, onToggle }) => {
  return (
    <Box sx={{ mb: 2, borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
      <ListItemButton 
        onClick={() => onToggle(experience.id)}
        sx={{ 
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          }
        }}
      >

        <ListItemIcon>
          <AssignmentIndRoundedIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText
          primary={<Typography variant="h6" sx={{ color: 'white' }}>{experience.title}</Typography>}
        />
        {isOpen ? <ExpandLessIcon sx={{ color: 'white' }} /> : <ExpandMoreIcon sx={{ color: 'white' }} />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
          <Typography variant="subtitle1" sx={{ mb: 1, color: 'primary.main' }}>{experience.date}</Typography>
          <List sx={{ pl: 2 }}>
            {experience.responsibilities.map((resp, index) => (
              <ListItemText 
                key={index}
                primary={<Typography variant="body2" component="div" sx={{ display: 'flex', alignItems: 'flex-start', textAlign: 'left' }}>
                  <span style={{ marginRight: '8px', color: 'primary.main' }}>•</span>
                  {resp}
                </Typography>}
                sx={{ mb: 1 }}
              />
            ))}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
};

const MilitaryExp = () => {
  const [openExperience, setOpenExperience] = useState("");

  const handleToggle = (experienceId) => {
    setOpenExperience(openExperience === experienceId ? "" : experienceId);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, mx: 'auto', p: 2, pt: 0 }}>
      <Divider>
        <Typography
          variant="h6"
          color="contrast.textDark"
          sx={{
            textShadow: "0px 3px 8px #8a8a8a",
            paddingBottom: 2,
            paddingTop: 2,
            mt: "0px",
          }}
        >
          <MilitaryTechRoundedIcon
            sx={{
              verticalAlign: "center",
              fontSize: "large",
            }}
          />
          &nbsp; Military Experience
        </Typography>
      </Divider>
      
      <Grid container spacing={2} direction="column">
        {militaryExperiences.map((experience) => (
          <Grid item key={experience.id}>
            <ExperienceItem
              experience={experience}
              isOpen={openExperience === experience.id}
              onToggle={handleToggle}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        sx={{ color: "button.textLight", ml: 2 }}
        href="/Military-Training"
        variant="contained"
        endIcon={<MilitaryTechRoundedIcon />}
      >
        See My Military Training
      </Button>
    </Box>
  );
};

export default MilitaryExp;

