// *****************************************************************************
// This component displays the About Me section and Resume
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";
import Resume from "./Resume";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class AboutMe extends Component {
  render() {
    return (
      <Box color="contrast.textDark">
        <Typography sx={{ textShadow: "0px 3px 8px #8a8a8a" }} paragraph={true}>
          I'm a highly motivated veteran that has over a decade of experience as
          an Electronic Technician and Network Administrator. I love solving
          problems and I work well with teams to accomplish projects.
        </Typography>
        <Typography sx={{ textShadow: "0px 3px 8px #8a8a8a" }} paragraph={true}>
          I've been in the process of transitioning from my military career to a
          new career as a Software Developer. During this transition I have been
          going to DeVry University full-time working towards a Bachelor's of
          Science in Computer Information Systems with a focus in Software
          Programming. I am interested in gaining real-world experience through
          internships and mentorship.
        </Typography>
        <Typography sx={{ textShadow: "0px 3px 8px #8a8a8a" }} paragraph={true}>
          Thank you for taking the time to view my portfolio.
        </Typography>
        <Resume />
      </Box>
    );
  }
}
export default AboutMe;
