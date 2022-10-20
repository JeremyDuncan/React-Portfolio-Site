// *****************************************************************************
// This component displays the About Me section and Resume
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Resume from "./Resume";

const AboutMe = () => {
  return (
    <Box color="contrast.textDark">
      <Typography
        variant="h6"
        sx={{ textShadow: "0px 3px 8px #8a8a8a", mr: "1rem" }}
      >
        <span className="highlightBlue">&#10100;</span> About Me{" "}
        <span className="highlightBlue">&#10101;</span>
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        I'm a highly motivated Full Stack Developer that has over a decade of
        proven experience in the US Navy.
      </Typography>

      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        I have a passion for technology and solving complex problems with the
        creation of logical solutions. I'm currently going to DeVry University
        for a Bachelor's of Science in Computer
        Information Systems with a focus in Software Programming as well as
        completing a Full-Stack Engineering program at LEARN Academy
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        I have practical skills in Pair Programming, Test Driven Development,
        and a Full Tech Stack which consists of JavaScript, React, HTML, CSS,
        Ruby, Ruby on Rails, Jest, RSpec, and PostgreSQL.
      </Typography>

      <Resume />
    </Box>
  );
};

export default AboutMe;
