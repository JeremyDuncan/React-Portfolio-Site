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
import MyResume from "./Jeremy_Duncan_Resume_All-11July2022.pdf";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";

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
    <br/>
    <Button
            href={MyResume}
            download
            variant="contained"
            endIcon={<AssignmentIndRoundedIcon />}
          >
            Download My Resume
          </Button>

      </Box>
    );
  }
}
export default Resume;