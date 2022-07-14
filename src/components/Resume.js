import React, { Component } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import MyResume from "./Jeremy_Duncan_Resume_All-11July2022.pdf";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";

import Divider from "@mui/material/Divider";

export default function NestedList() {
  const [open, setOpen] = React.useState("");


  const handleClick = (e) => {
    var job = e.target.parentElement.id;
    console.log(e)
    console.log(job)
    if(open === job){
      setOpen("0");
    }else {
      setOpen(job)
    }

  };
  // var job = e.target.lastChild.data;
  return (
    <List
      sx={{ width: '100%', bgcolor: 'secondary.light', color: "text.primary", borderRadius: 5 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" 
        sx={{ width: '100%', bgcolor: 'primary.light', color: "text.primary", borderRadius: 1 }}>
          Work Experience
        </ListSubheader>
      }
    >

{/* === === === === === WORKCENTER SUPERVISOR === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="WCS" 
        primary="Work Center Supervisor"
        secondary="United States Navy 2015 - 2018" />
        {(open == "WCS")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "WCS")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Responsible for the following: Scheduling and supervising accomplishment of weekly work center maintenance tasks. Ensuring preventive maintenance status is shown correctly on work center PMS schedules. Informing the division officer or group supervisor of maintenance actions within the work center. Maintaining an adequate supply maintenance material for the work center. Ensuring prompt documentation of all noted material deficiencies in the work center if required. Documenting completed maintenance actions promptly. Reviewing all maintenance documentation leaving the work center to make sure it is correct, legible, and prepared and submitted promptly, ensuring maximum use of planned maintenance system as a maintenance training aid for work center personnel. Maintaining control and accountability of work center maintenance, verifying that the work is current and complete. Ensuring maintenance personnel are trained and qualified to perform maintenance and work on designated equipment. Analyzing and reporting of maintenance requirements that are believed to be inadequate or excessive or when performance would cause a hazardous condition to exist; or replacement documents are required. Maintaining an accurate and current list of maintenance documentation to actual work center equipment configuration. Ensuring periodic maintenance requirements (PMR) scheduled for the work center are completed and reported as stated in the planned maintenance system. Ensuring proper tests and inspections prior to acceptance of work done by outside activities. Ensuring delivery of test, measurement, or other portable equipment to testing and calibration work centers as indicated on scheduling reports."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse>

{/* === === === ELECTRONICS DATA SYSTEMS TECH === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="LINK" 
        primary="Electronics Data Systems Technician"
        secondary="United States Navy 2015 - 2018" />
        {(open == "LINK")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "LINK")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Maintain data link, inertial navigation, tactical network, message routing, digital production/projection, calibration, fiber optics, micro-miniature module test and repair, computer-based, and peripheral computer systems. In addition, other responsibilities were to analyze equipment operation, establish computer, and network configurations, and troubleshoot and repair computer-based equipment to the lowest replaceable unit. Executed casualty control procedures, restoring operability for all assigned electronic equipment, recognizing mission criticality and redundancies within systems. Also performed administrative functions that include updating casualty reporting messages, technical manuals, equipment maintenance records, and managing test equipment calibration requirements."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse>

{/* === === === === === IVCS TECHNICIAN === === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="IVCS" 
        primary="Internal Voice Communication Technician"
        secondary="United States Navy 2015 - 2018" />
        {(open == "IVCS")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "IVCS")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Operated and performed installation, testing, troubleshooting, maintenance and repair of shipboard telephony systems and other digital telephone switching systems to include use of electronic test equipment in the checkout and repair of complex electrical and electronic circuits. Analyzed system faults, isolated, identified, and performed corrective actions as required ensuring 24-hours-a-day operation."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse>
      
 {/* === === === INFORMATION SYSTEMS TECH === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="IT" 
        primary="Information System Maintenance Technician"
        secondary="United States Navy 2012 - 2018" />
        {(open == "IT")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "IT")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Performed Journeyman level organizational and system maintenance on shipboard and ashore end-to-end information systems. Experience working with Local and Wide Area Networks, Desktop Computers, Tactical Advanced Computers (TAC-n), Routers, Uninterruptible Power Supplies (UPS), Satellite Communications (SATCOM) Peripheral Devices, General Front End Processor (GFCP), Link Converters, Fiber Optic Repair Centronics Data Hubs. Knowledge in CompTia A+, CompTia Security+, MCDST XP, Video Switch technology, working knowledge in Windows NT, Windows XP, Windows 10, UNIX, and Cisco INTERNETWORK Operating systems."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse> 

{/* === === === === === NAVY INSTRUCTOR === === === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="INSTRUCTOR" 
        primary="US Navy Instructor"
        secondary="United States Navy 2011 - 2018" />
        {(open == "INSTRUCTOR")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "INSTRUCTOR")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Qualified Navy instructor to direct teaching and learning activities in schools; training centers, and selected reserve units; write learning objectives; prepare test items; evaluate instructional materials and results; and counsel students on academic learning problems."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse>      

{/* === === === === === RADAR TECHNICIAN === === === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="RADAR" 
        primary="Electronics Radar Systems Technician"
        secondary="United States Navy 2010 - 2018" />
        {(open == "RADAR")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "RADAR")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Experience maintaining surface search, air search, weather radar systems, radar video switchboards, synchro Identification Friend or Foe (IFF) equipment, and tactical air navigation equipment, including all associated cabling, cooling water, and dry air systems. Analyzing equipment operation and alignments, troubleshooting, and repairing equipment to the lowest replaceable unit. Executing casualty control procedures, restoring operability for all assigned electronic equipment, recognizing mission criticality and redundancies within systems. Perform administrative functions that include updating casualty reporting messages, technical manuals, equipment maintenance records, and managing test equipment calibration requirements. Other duties included completing fiber optic and basic soldering repair, electrical safety checks, and test equipment calibration and supervising personnel who conduct tool and test equipment inventories, logistics support, and maintenance and testing of systems and equipment."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse> 

{/* === === === === === GAGE CALIBRATION  === === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="GAGE" 
        primary="Gage and Meter Calibrator"
        secondary="United States Navy 2008 - 2018" />
        {(open == "GAGE")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "GAGE")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Calibrated and maintained shipboard Pressure, Temperature, Electric Meter, and Torque Calibration. Ensured the proper operation, care, and maintenance of Shipboard Gage Calibration Program test equipment, and was responsible for documenting and tracking of multiple ship's calibration programs."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse>

{/* === === === === === 2M TECHNICIAN  === === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="2M" 
        primary="2M Micro Miniature Repair Technician"
        secondary="United States Navy 2007 - 2018" />
        {(open == "2M")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "2M")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Experience with advanced soldering techniques, qualified to perform high quality and reliable solder connections on complex circuit card assemblies; perform miniature electronic repairs to single-sided and double sided printed wiring boards (PWB); repair PWB laminate and conductor damage; remove and apply PWB conformal coating; install wires on common types of terminal and solder connectors; repair multilayer, flexible, and plastic, panel-printed circuit board; remove and install surface-mounted components; and perform solder station maintenance."/>
          </ListItemButton>
          <Divider/>
        </List>
      </Collapse>

{/* === === === === === ELECTRONICS TECHNICIAN  === === === === === */}
      {/* === List Item Button === */} 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIndRoundedIcon />
        </ListItemIcon>
        <ListItemText
        Id="ET" 
        primary="Electronics Technician"
        secondary="United States Navy 2005 - 2018" />
        {(open == "ET")? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* === COLLAPSE LIST === */}
      <Collapse in={(open === "ET")} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <SubdirectoryArrowRightIcon />
            </ListItemIcon>
            <ListItemText 
            primary="Maintained shore-based, ship-based, and portable communications equipment, including all associated cabling, computer, multiplexing, switching, cryptographic, recording, cooling water, and dry air systems. Analyzed equipment operation and alignment, troubleshoot, and repaired equipment to the lowest replaceable unit. In addition, Execute casualty control procedures, restoring operability for all assigned electronic equipment, and recognizing mission criticality and redundancies within systems. Other duties included completing fiber optic and basic soldering repair, electrical safety checks, test equipment calibration, and supervising personnel who conduct tool and test equipment inventories, logistics support, and maintenance and testing of systems and equipment."/>
          </ListItemButton>
       
        </List>
      </Collapse>
      <br/>
      <Button
            href={MyResume}
            download
            variant="contained"
            endIcon={<AssignmentIndRoundedIcon />}
          >
            Download My Resume
          </Button>
    </List>
  );
}