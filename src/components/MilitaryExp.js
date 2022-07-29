// *****************************************************************************
// This component displays my Military Experience
// Goes to ==> MainSection.js Component
// *****************************************************************************

import React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";

export default function NestedList() {
  const [open, setOpen] = React.useState("");

  const handleClick = (e) => {
    var job = e.target.parentElement.id;
    console.log(e);
    console.log(job);
    if (open === job) {
      setOpen("0");
    } else {
      setOpen(job);
    }
  };

  return (
    <Box container direction="row" justifyContent="center" alignItems="center">
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 550,
            bgcolor: "primary.secondary",
            color: "primary.contrastText",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {/* === === === === === WORKCENTER SUPERVISOR === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}}/>
            </ListItemIcon>
            <ListItemText sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}} Id="WCS" primary="Work Center Supervisor" />
            {/* if open equals "WCS" then show details... */}
            {open === "WCS" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "WCS"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding disableTypography>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2015 - 2018" />
                <ListItemText disableTypography secondary="● Scheduled and supervised the accomplishment of weekly work center maintenance tasks. Ensured prompt documentation of all noted material deficiencies in the work center if required." />
                <ListItemText disableTypography secondary="● Ensured maintenance personnel were trained and qualified to perform maintenance and work on designated equipment" />
                <ListItemText disableTypography secondary="● Analyzed and reported any maintenance requirements that were believed to be inadequate or excessive or when performance would cause a hazardous condition to exist; or replacement documents were required." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === ELECTRONICS DATA SYSTEMS TECH === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText
             sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}}
              Id="LINK"
              
              primary="Electronics Data Systems Technician"
            />
            {open === "LINK" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "LINK"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2015 - 2018" />
                <ListItemText disableTypography secondary="● Maintained data link, inertial navigation, tactical network, message routing digital production/projection, calibration, fiber optics, micro-miniature module test and repair, computer-based, and peripheral computer systems." />
                <ListItemText disableTypography secondary="● Analyzed equipment operation, established computer, and network configurations, and troubleshot and repaired computer-based equipment to the lowest replaceable unit." />
                <ListItemText disableTypography secondary="● Executed casualty control procedures, restored operability for all assigned electronic equipment." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === === === IVCS TECHNICIAN === === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText
            sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}}
              Id="IVCS"
              primary="Internal Voice Communication Technician"
            />
            {open === "IVCS" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "IVCS"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2015 - 2018" />
                <ListItemText disableTypography
                  secondary="● Operated and performed installation, testing, troubleshooting, 
                    maintenance and repair of shipboard telephony systems and other digital 
                    telephone switching systems."
                />
                <ListItemText disableTypography secondary="● Analyzed system faults, isolated, identified, and performed corrective actions as required ensuring 24-hours-a-day operation." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === INFORMATION SYSTEMS TECH === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText
            sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}}
              Id="IT"
              primary="Information System Maintenance Technician"
            />
            {open === "IT" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "IT"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2012 - 2018" />
                <ListItemText disableTypography secondary="● Performed organizational and system maintenance on end-to-end information systems." />
                <ListItemText disableTypography secondary="● Experience working with Local and Wide Area Networks, Desktop Computers, Routers, Switches, and Satellite Communications (SATCOM)." />
                <ListItemText disableTypography secondary="● Knowledge in CompTia A+, CompTia Security+, MCDST XP, Video Switch technology, working knowledge in Windows NT, Windows XP, Windows 10, UNIX, and Image Deployments." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === === === NAVY INSTRUCTOR === === === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}} Id="INSTRUCTOR" primary="US Navy Instructor" />
            {open === "INSTRUCTOR" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "INSTRUCTOR"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2011 - 2018" />
                <ListItemText disableTypography secondary="● Qualified Navy instructor that directed teaching and learning activities in schools; training centers, and selected reserve units." />
                <ListItemText disableTypography secondary="● Wrote learning objectives; prepared test items; evaluated instructional materials and results; and counseled students on academic learning problems." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === === === RADAR TECHNICIAN === === === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText
            sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}}
              Id="RADAR"
              primary="Electronics Radar Systems Technician"
            />
            {open === "RADAR" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "RADAR"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2010 - 2018" />
                <ListItemText disableTypography secondary="● Maintained surface search, air search, weather radar systems, radar video switchboards, synchro Identification Friend or Foe (IFF) equipment, and tactical air navigation equipment." />
                <ListItemText disableTypography secondary="● Performed administrative functions that included updating casualty reporting messages, technical manuals, equipment maintenance records, and managing test equipment calibration requirements." />
                <ListItemText disableTypography secondary="● Analyzed equipment operation and alignments, troubleshot, and repaired equipment to the lowest replaceable unit." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === === === GAGE CALIBRATION  === === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}} Id="GAGE" primary="Gage and Meter Calibrator" />
            {open === "GAGE" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "GAGE"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2008 - 2018" />
                <ListItemText disableTypography secondary="● Calibrated and maintained shipboard Pressure, Temperature, Electric Meter, and Torque Calibration." />
                <ListItemText disableTypography secondary="● Ensured the proper operation, care, and maintenance of Shipboard Gage Calibration Program test equipment." />
                <ListItemText disableTypography secondary="● Documented and tracked of multiple ship's calibration programs." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === === === 2M TECHNICIAN  === === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText
            sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}}
              Id="2M"
              primary="2M Micro Miniature Repair Technician"
            />
            {open === "2M" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "2M"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2007 - 2018" />
                <ListItemText disableTypography secondary="● Experience with advanced soldering techniques, performing high quality and reliable solder connections on complex circuit card assemblies." />
                <ListItemText disableTypography secondary="● Performed miniature electronic repairs to single-sided and double sided printed wiring boards (PWB)." />
                <ListItemText disableTypography secondary="● Repaired PWB laminate and conductor damage, removed and applied PWB conformal coating, and repaired multilayer, flexible, and plastic, panel-printed circuit boards." />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          {/* === === === === === ELECTRONICS TECHNICIAN  === === === === === */}

          {/* === List Item Button === */}
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <AssignmentIndRoundedIcon sx={{color: "contrast.textdark"}} />
            </ListItemIcon>
            <ListItemText sx={{color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a"}} Id="ET" primary="Electronics Technician" />
            {open === "ET" ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* === COLLAPSE LIST === */}
          <Collapse in={open === "ET"} timeout="auto" unmountOnExit>
            <List sx={{color: "secondaryList.text"}} component="div" disablePadding>
              <ListItemButton
                sx={{ display: "flex", flexDirection: "column", pl: 4 }}
              >
                <ListItemText disableTypography secondary="United States Navy 2005 - 2018" />
                <ListItemText disableTypography secondary="● Maintained shore-based, ship-based, and portable communications equipment, including all associated cabling, computer, multiplexing, switching, cryptographic, recording, cooling water, and dry air systems." />
                <ListItemText disableTypography secondary="● Analyzed equipment operation and alignment, troubleshot, and repaired equipment to the lowest replaceable unit." />
                <ListItemText disableTypography secondary="● Supervising personnel who conducted tool and test equipment inventories, logistics support, and maintenance and testing of systems and equipment." />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
       
        <Button
          sx={{color: "button.textLight", ml: 2}}
          href="https://jeremy-duncan.notion.site/Jeremy-Duncan-s-Military-Experience-7abdbb418a6b40e7b2abd161eed48cda"
          target="_blank"
          rel="noopener"
          variant="contained"
          endIcon={<MilitaryTechRoundedIcon />}
        >
          See My Military Experience
        </Button>
      </Grid>
    </Box>
  );
}