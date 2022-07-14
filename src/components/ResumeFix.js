// *****************************************************************************
// This component displays my Resume Information
// Goes to to ==> AboutMe.js Component 
// *****************************************************************************

import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Chip from '@mui/material/Chip';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Just added for implemetation purposes
// move once complete
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';




class Resume extends Component {



  render() {
    const NestedList = () => {
      const [open, setOpen] = React.useState(true);
    
      const handleClick = () => {
        setOpen(!open);
      };
    };


    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto"
        }}
      >

<List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={this.handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>




        <List>
          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="Internal Voice Communication Technician"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2015 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Operated and performed installation, testing, troubleshooting, maintenance and repair of shipboard telephony systems and other digital telephone switching systems to include use of electronic test equipment in the checkout and repair of complex electrical and electronic circuits. Analyzed system faults, isolated, identified, and performed corrective actions as required ensuring 24-hours-a-day operation."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="Work Center Supervisor"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2015 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Responsible for the following: Scheduling and supervising accomplishment of weekly work center maintenance tasks. Ensuring preventive maintenance status is shown correctly on work center PMS schedules. Informing the division officer or group supervisor of maintenance actions within the work center. Maintaining an adequate supply maintenance material for the work center. Ensuring prompt documentation of all noted material deficiencies in the work center if required. Documenting completed maintenance actions promptly. Reviewing all maintenance documentation leaving the work center to make sure it is correct, legible, and prepared and submitted promptly, ensuring maximum use of planned maintenance system as a maintenance training aid for work center personnel. Maintaining control and accountability of work center maintenance, verifying that the work is current and complete. Ensuring maintenance personnel are trained and qualified to perform maintenance and work on designated equipment. Analyzing and reporting of maintenance requirements that are believed to be inadequate or excessive or when performance would cause a hazardous condition to exist; or replacement documents are required. Maintaining an accurate and current list of maintenance documentation to actual work center equipment configuration. Ensuring periodic maintenance requirements (PMR) scheduled for the work center are completed and reported as stated in the planned maintenance system. Ensuring proper tests and inspections prior to acceptance of work done by outside activities. Ensuring delivery of test, measurement, or other portable equipment to testing and calibration work centers as indicated on scheduling reports."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="Electronics Data Systems Technician"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2015 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Maintain data link, inertial navigation, tactical network, message routing, digital production/projection, calibration, fiber optics, micro-miniature module test and repair, computer-based, and peripheral computer systems. In addition, other responsibilities were to analyze equipment operation, establish computer, and network configurations, and troubleshoot and repair computer-based equipment to the lowest replaceable unit. Executed casualty control procedures, restoring operability for all assigned electronic equipment, recognizing mission criticality and redundancies within systems. Also performed administrative functions that include updating casualty reporting messages, technical manuals, equipment maintenance records, and managing test equipment calibration requirements."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="Information System Maintenance Technician"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2012 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Performed Journeyman level organizational and system maintenance on shipboard and ashore end-to-end information systems. Experience working with Local and Wide Area Networks, Desktop Computers, Tactical Advanced Computers (TAC-n), Routers, Uninterruptible Power Supplies (UPS), Satellite Communications (SATCOM) Peripheral Devices, General Front End Processor (GFCP), Link Converters, Fiber Optic Repair Centronics Data Hubs. Knowledge in CompTia A+, CompTia Security+, MCDST XP, Video Switch technology, working knowledge in Windows NT, Windows XP, Windows 10, UNIX, and Cisco INTERNETWORK Operating systems."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="US Navy Instructor"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2011 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Qualified navy instructor to direct teaching and learning activities in schools; training centers, and selected reserve units; write learning objectives; prepare test items; evaluate instructional materials and results; and counsel students on academic learning problems."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="Electronics Radar Systems Technician"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2010 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Experience maintaining surface search, air search, weather radar systems, radar video switchboards, synchro Identification Friend or Foe (IFF) equipment, and tactical air navigation equipment, including all associated cabling, cooling water, and dry air systems. Analyzing equipment operation and alignments, troubleshooting, and repairing equipment to the lowest replaceable unit. Executing casualty control procedures, restoring operability for all assigned electronic equipment, recognizing mission criticality and redundancies within systems. Perform administrative functions that include updating casualty reporting messages, technical manuals, equipment maintenance records, and managing test equipment calibration requirements. Other duties included completing fiber optic and basic soldering repair, electrical safety checks, and test equipment calibration and supervising personnel who conduct tool and test equipment inventories, logistics support, and maintenance and testing of systems and equipment."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="Gage and Meter Calibrator"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2008 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Calibrated and maintained shipboard Pressure, Temperature, Electric Meter, and Torque Calibration. Ensured the proper operation, care, and maintenance of Shipboard Gage Calibration Program test equipment, and was responsible for documenting and tracking of multiple ship's calibration programs."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="2M Micro Miniature Repair Technician"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2007 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Experience with advanced soldering techniques, qualified to perform high quality and reliable solder connections on complex circuit card assemblies; perform miniature electronic repairs to single-sided and double sided printed wiring boards (PWB); repair PWB laminate and conductor damage; remove and apply PWB conformal coating; install wires on common types of terminal and solder connectors; repair multilayer, flexible, and plastic, panel-printed circuit board; remove and install surface-mounted components; and perform solder station maintenance."
            />
          </ListItem>
          <Divider/>

          <ListItem>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText
              primary="Electronics Technician"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="United States Navy 2005 - 2018"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Job Description"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="Maintained shore-based, ship-based, and portable communications equipment, including all associated cabling, computer, multiplexing, switching, cryptographic, recording, cooling water, and dry air systems. Analyzed equipment operation and alignment, troubleshoot, and repaired equipment to the lowest replaceable unit. In addition, Execute casualty control procedures, restoring operability for all assigned electronic equipment, and recognizing mission criticality and redundancies within systems. Other duties included completing fiber optic and basic soldering repair, electrical safety checks, test equipment calibration, and supervising personnel who conduct tool and test equipment inventories, logistics support, and maintenance and testing of systems and equipment."
            />
          </ListItem>
          <Divider/>
          </List>

      </Box>
    );
  }
}
export default Resume;