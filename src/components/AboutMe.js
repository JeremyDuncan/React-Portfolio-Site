// *****************************************************************************
// This component displays the About Me section and Resume
// Goes to ==> MainSection.js Component
// *****************************************************************************

import React, { Component } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MyResume from "./Jeremy_Duncan_Resume_All-11July2022.pdf";

class AboutMe extends Component {
  render() {
    return (
      <Box>
          <Typography paragraph={true}>
            I'm a highly motivated veteran that has over a decade of
            experience as an Electronic Technician and Network Administrator.
            I love solving problems and I work well with teams to accomplish
            projects.
          </Typography>
          <Typography paragraph={true}>
            I've been in the process of transitioning from my military career
            to a new career as a Software Developer. During this transition I
            have been going to DeVry University full-time working towards a
            Bachelor's of Science in Computer Information Systems with a focus
            in Software Programming. I am interested in gaining real-world
            experience through internships and mentorship.
          </Typography>
          <Typography paragraph={true}>
            Thank you for taking the time to view my portfolio.
          </Typography>
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
export default AboutMe;