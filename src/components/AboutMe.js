// *****************************************************************************
// This component displays the About Me section and Resume
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Divider } from '@mui/material';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import Resume from "./Resume";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AboutMe = () => {
  return (
    <Box
      color="contrast.textDark"
      sx={{ display: "flex", flexDirection: "column", padding: "15px" }}
    >
      <Box sx={{ display: "flex", gap: "25px" }}>
        {/* === PORTFOLIO IMAGE OF ME === ============================= */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
          xs={8}
          sm={3}
          md={5}
          lg={4}
          xl={4}
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
          {/*//=========== GRID BOX ===============> */}
          <Item elevation={14} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/me_ny.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
        </Grid>

        {/*//=========== PORTFOLIO IMAGE OF ME GRID END ===============> */}

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* =============================================================================== */}

            {/* === PORTFOLIO IMAGE OF ME === ============================= */}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              item
              xs={8}
              sm={5.5}
              md={5}
              lg={4}
              xl={3}
              sx={{
                display: { sm: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                marginBottom: "15px"
              }}
            >
              {/*//=========== GRID BOX ===============> */}
              <Item
                elevation={14}
                sx={{ bgcolor: "primary.main", color: "white" }}
              >
                <Image
                  src={require("../images/me_ny.webp")}
                  style={{ borderRadius: 16 }}
                  shift="top"
                  distance={400}
                />
              </Item>
            </Grid>

            {/* =============================================================================== */}

            <Typography
            mb={1}
              variant="h4"
              sx={{
                textShadow: "0px 3px 8px #8a8a8a",
                textAlign: "center",
                fontSize: "2.4rem",
                fontWeight: "500",
                display: { xs: "none", sm: "none", md: "initial" }
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography
            mb={1}
              variant="h4"
              sx={{
                textShadow: "0px 3px 8px #8a8a8a",
                textAlign: "center",
                fontWeight: "500",
                display: { xs: "none", sm: "initial", md: "none" }
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography
              mb={1}
              sx={{
                textShadow: "0px 3px 8px #8a8a8a",
                textAlign: "center",
                display: { xs: "initial", sm: "none" },
                fontWeight: "500",
                fontSize: "1.6rem",
                lineHeight: "2rem"
              }}
            >
              Full Stack Developer
              
            </Typography>
            <Divider />
            
            <Typography
              mt={2}
              sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
              paragraph={true}
            >
              I'm a highly motivated Full Stack Developer that has over a decade
              of proven experience in the US Navy.
            </Typography>

            <Typography
              sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
              paragraph={true}
            >
              I have a passion for technology and solving complex problems with
              the creation of logical solutions. I'm currently going to DeVry
              University for a Bachelor's of Science in Computer Information
              Systems with a focus in Software Programming as well as completing
              a Full-Stack Engineering program at LEARN Academy
            </Typography>
            <Typography
              sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
              paragraph={true}
            >
              I have practical skills in Pair Programming, Test Driven
              Development, and a Full Tech Stack which consists of JavaScript,
              React, HTML, CSS, Ruby, Ruby on Rails, Jest, RSpec, and
              PostgreSQL.
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Resume />
    </Box>
  );
};

export default AboutMe;
