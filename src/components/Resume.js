// *****************************************************************************
// This component displays my Resume Information
// Goes to to ==> MainSection.js Component 
// *****************************************************************************

import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MyResume from "./Jeremy_Duncan_Resume_All-11July2022.pdf";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
    <Button sx={{color: "button.textLight"}}
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