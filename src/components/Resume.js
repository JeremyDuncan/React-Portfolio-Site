// *****************************************************************************
// This component displays my Resume Information
// Goes to to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { Component } from "react";
import MyResume from "../download/JeremyDuncan_Resume.docx";

class Resume extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <br />
        <Button
          sx={{ color: "button.textLight" }}
          href={MyResume}
          download
          variant="contained"
          endIcon={<DownloadIcon />}
        >
          My Resume
        </Button>
      </Box>
    );
  }
}
export default Resume;
