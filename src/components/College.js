// *****************************************************************************
// This component displays my Colleges and Degrees
// Imported to AboutMe.js Component ==>
// *****************************************************************************

import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


class College extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClick: "",
    };
  }
  
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
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
      </Box>
    );
  }
}
export default College;