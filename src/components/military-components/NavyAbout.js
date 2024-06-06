// *****************************************************************************
// This component displays the Navy About Me section and Resume
// Goes to ==> Military.js Component
// *****************************************************************************
import {Box, Link, Typography } from "@mui/material";

const NavyAbout = () => {
  return (
    <Box color="contrast.textDark">
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



  
    </Box>
  );
};

export default NavyAbout;
