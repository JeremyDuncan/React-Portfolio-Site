// *****************************************************************************
// This component displays the About Me section and Resume
// Goes to ==> MainSection.js Component
// *****************************************************************************
import { Box, Divider, Typography, styled, Paper, Grid, Button } from "@mui/material";
import Image from "mui-image";
import DescriptionIcon from "@mui/icons-material/Description";

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
        {/* Portfolio Image for Larger Screens */}
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
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Item elevation={14} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../../images/me_ny.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* Portfolio Image for Smaller Screens */}
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
              <Item
                elevation={14}
                sx={{ bgcolor: "primary.main", color: "white" }}
              >
                <Image
                  src={require("../../images/me_ny.webp")}
                  style={{ borderRadius: 16 }}
                  shift="top"
                  distance={400}
                />
              </Item>
            </Grid>

            {/* Title */}
            <Typography
              mb={1}
              variant="h4"
              sx={{
                textShadow: "0px 3px 8px #8a8a8a",
                textAlign: "center",
                fontSize: { xs: "1.6rem", sm: "2.4rem" },
                fontWeight: "500",
                display: { xs: "initial", md: "initial" }
              }}
            >
              Full Stack Engineer
            </Typography>
            <Divider />

            <Typography
              mt={2}
              sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
              paragraph
            >
              I'm a Full Stack Software Engineer and 13-year United States Navy Veteran with professional experience in software development, electronics and information systems.
            </Typography>

            <Typography
              sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
              paragraph
            >
              I have a passion for technology and solving complex problems with the creation of logical solutions. I have a B.S. in Computer Information Systems and Software Programming (Summa Cum Laude), and an A.S. in Information Technology and Networking.
            </Typography>
            <Typography
              sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
              paragraph
            >
              My professional experience as a Ruby on Rails Engineer has allowed me to hone skills in Pair Programming, Test Driven Development, and with languages and technologies such as JavaScript, React, HTML, CSS, SASS, Ruby, PHP, Ruby on Rails, Laravel, Lumen, Docker, AWS, Jest, RSpec, MySQL, and PostgreSQL.
            </Typography>

            <Typography
              sx={{ textShadow: "0px 3px 8px #8a8a8a", textAlign: "left" }}
              paragraph
            >
              My time in the Navy instilled in me a disciplined, detail-oriented approach to problem-solving and project management, which I have successfully applied in my software engineering career.
            </Typography>
          </Box>
        </Grid>
      </Box>
      
      {/* Resume Button */}
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
          className="btn ga-btn"
          sx={{ color: "button.textLight" }}
          href="https://drive.google.com/file/d/1PGlstEol5OUk9diDouneruzw6PQe3Hx9/view?usp=sharing"
          rel="noopener"
          target="_blank"
          variant="contained"
          endIcon={<DescriptionIcon />}
        >
          My Resume
        </Button>
      </Box>
    </Box>
  );
};

export default AboutMe;
