// *****************************************************************************
// This component displays the About Me section and Resume
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
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
        I'm a highly motivated veteran that has over a decade of experience as
        an Electronic Technician and Network Administrator. I love learning new
        technologies, solving problems, and I work well with teams to accomplish
        projects.
      </Typography>

      <Typography
        variant="h6"
        sx={{ textShadow: "0px 3px 8px #8a8a8a", mr: "1rem" }}
      >
        <span className="highlightBlue">&#10100;</span> Professional
        Accomplishments <span className="highlightBlue">&#10101;</span>
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        In my Navy career I have worn many hats of responsibility. As a Ship
        Supervisor, I was responsible for leading teams of 27 personnel in
        completing maintenance and repair projects that were critical to the
        mission readiness of the Navy.
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        As Lead Field Technician and Network Administrator I was responsible for
        the testing and deployment of critical Windows desktop images used for
        training the Navy's fleet. I was responsible for establishing and
        obtaining certifications for new programs such as Fleet Calibration
        Activity (FCA), 2M Micro-Miniature Repair Activity, and Electronic Test
        Equipment programs.
      </Typography>
      <Typography
        sx={{
          textShadow: "0px 3px 8px #8a8a8a",
          textAlign: "left",
        }}
        paragraph={true}
      >
        I established and led a combat systems department to completing all
        certifications as Work Center Supervisor. This helped lead to the
        successful commissioning of the Navy's new aluminum tri-hull
        Independence class ship USS Gabrielle Giffords in time for
        special visits from the honorable Joe Biden, Nancy Pelosi, Hilary
        Clinton, Scott Kelly and Gabrielle Giffords.
        <span className="highlightBlue">&#10100;</span>{" "}
        <Link
          sx={{
            color: "button.textDark",
            textAlign: "center",
            marginBottom: "10px",
          }}
          /*==> URL Link <== =======================================*/
          href="https://www.youtube.com/watch?v=nwp21fFBa4g "
          target="_blank"
          rel="noopener"
        >
          You can view the commissioning here
        </Link>{" "}
        <span className="highlightBlue">&#10101;</span>
      </Typography>

      <Typography
        variant="h6"
        sx={{ textShadow: "0px 3px 8px #8a8a8a", mr: "1rem" }}
      >
        <span className="highlightBlue">&#10100;</span> Passion and Drive{" "}
        <span className="highlightBlue">&#10101;</span>
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        I've come to discover I have a passion for solving complex problems with
        the creation of logical solutions. This has led me to transitioning from
        my military career to a new career as a Full-Stack Developer. During
        this transition I have been going to DeVry University full-time working
        towards a Bachelor's of Science in Computer Information Systems with a
        focus in Software Programming.
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        This has also led me to completing a Full-Stack Engineering program at
        LEARN Academy in which I'm gaining real world practical skills in Pair
        Programming, Test Driven Development, and a Full Tech Stack which
        consists of JavaScript, React, HTML, CSS, Ruby, Ruby on Rails, Jest,
        RSpec, and PostgreSQL.
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textShadow: "0px 3px 8px #8a8a8a",
          mr: "1rem",
        }}
      >
        <span className="highlightBlue">&#10100;</span> Goals{" "}
        <span className="highlightBlue">&#10101;</span>
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        I am interested in gaining real-world experience through internships and
        mentorship. I wish to be a great asset for a company wanting a motivated
        developer.
      </Typography>
      <Typography
        variant="h6"
        sx={{ textShadow: "0px 3px 8px #8a8a8a", mr: "1rem" }}
      >
        <span className="highlightBlue">&#10100;</span> Thank You{" "}
        <span className="highlightBlue">&#10101;</span>
      </Typography>
      <Typography
        sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
        paragraph={true}
      >
        Thank you for taking the time to view my portfolio site I created using
        HTML, CSS, and JavaScript in conjunction with the React.js and Material
        UI libraries.
      </Typography>
      <Resume />
    </Box>
  );
};

export default AboutMe;
