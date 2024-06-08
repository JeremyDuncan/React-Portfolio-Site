// *****************************************************************************
// This is the DevryProjects Component.
// Goes to ==> Devry.js Component
//
//  == Images need to be 600w x 300h for best look ==
// *****************************************************************************
import { Box, Button, Grid, Paper, styled, Typography } from "@mui/material";
import Image from "mui-image";
import { NavigateNextRoundedIcon } from "../../mui-icons";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const ProjectSection = ({ imageSrc, title, subtitle, description, link }) => (
    <>
      <Grid
        elevation={24}
        mb={5}
        ml={1.2}
        xs={10}
        sx={{
          height: "1px",
          border: "2px solid gray",
          borderRadius: "20px",
          bgcolor: "gray"
        }}
      />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          gap: { xs: ".3rem", sm: ".3rem", md: "5rem" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
          ml: 1,
          pb: 5,
        }}
      >

        <Grid item xs={10} sm={10} md={5} lg={5} xl={5.5}>
          <Item sx={{ bgcolor: "primary.secondary" }} elevation={12}>
            <Image src={imageSrc} sx={{ borderRadius: "5px" }} />
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={5} xl={4} sx={{ display: "flex", alignItems: "center" }}>
          <Item sx={{ maxWidth: "900px" }} elevation={12}>
            <Typography variant="h5" p={2} sx={{ color: "#004787", textShadow: "1.5px 1.5px 4px lightgrey", fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ color: "#004787", textShadow: "1.5px 1.5px 4px lightgrey" }}>
              {subtitle}
            </Typography>
            <Typography pl={3} pr={3} sx={{ color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a" }} align="left">
              {description}
            </Typography>
            <br />
            <Button
              sx={{ color: "button.textLight" }}
              href={link}
              target="_blank"
              rel="noopener"
              variant="contained"
              endIcon={<NavigateNextRoundedIcon />}
            >
              View Project
            </Button>
            <br />
            <br />
          </Item>
        </Grid>
      </Grid>
    </>
  );

  const DevryProjects = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h1"
              color="lightgray"
              sx={{
                fontWeight: "500",
                textAlign: "center",
                display: { xs: "none", sm: "none", md: "initial" },
              }}
            >
              College Portfolio
            </Typography>
            <Typography
              variant="h4"
              color="lightgrey"
              sx={{
                fontWeight: "500",
                textAlign: "center",
                display: { xs: "initial", sm: "initial", md: "none" },
              }}
            >
              College Portfolio
            </Typography>

            <Typography
              variant="h4"
              mb={1}
              sx={{
                color: "lightgrey",
                textAlign: "center",
                display: { xs: "none", sm: "none", md: "initial" },
              }}
            >
              My Projects From DeVry
            </Typography>
            <Typography
              variant="h7"
              mb={1}
              sx={{
                color: "lightgrey",
                textAlign: "center",
                display: { xs: "initial", sm: "initial", md: "none" },
              }}
            >
              My Projects From DeVry
            </Typography>

            <Grid
              item
              xs={6}
              sx={{
                height: "1px",
                border: { xs: "4px solid gray", sm: "4px solid gray", md: "6px solid gray" },
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                margin: "auto",
                width: { xs: "350px", md: "500px" },
                borderRadius: "20px",
                marginBottom: { xs: "1.2rem", sm: "3rem" },
                bgcolor: "gray",
              }}
            />
          </Grid>

          <ProjectSection
            imageSrc={require("../../images/devry-images/data-structures.webp")}
            title="CEIS295 Final Project:"
            subtitle="Data Structures and Algorithms"
            description="This is the final project for my DeVry class CEIS295. In this project I will be demonstrating fundamental data structure and algorithm concepts by developing applications that measure the performance of different algorithmic approaches."
            link="https://drive.google.com/file/d/1vyRzjmeAOtjm0wzWIB4jy-1GyRldLyQm/view?usp=sharing"
          />
          <ProjectSection
            imageSrc={require("../../images/devry-images/cis355.webp")}
            title="CIS355A Final Project:"
            subtitle="Java Business Applications"
            description="This is the final project for my DeVry class CIS355A. In this project I will be demonstrating fundamental Java concepts by developing a business application for a landscaping business."
            link="https://drive.google.com/file/d/1uH3Ivdrz63-NmRGcA3aWFBBVXqz7lCuf/view?usp=sharing"
          />
          <ProjectSection
            imageSrc={require("../../images/devry-images/phys.webp")}
            title="PHYS204 Final Project:"
            subtitle="The Application of IoT Technology and Physics"
            description="This is the final project for my DeVry class PHYS204. In this project I will be demonstrating fundamental concepts of the governing laws of physics by applying technologies from the growing field of Internet of Things (IoT)."
            link="https://docs.google.com/presentation/d/1tOTy0smToRhWYqRabzWCBa7iCLiUAPtI/edit?usp=sharing&ouid=112160917683681091638&rtpof=true&sd=true"
          />
          <ProjectSection
            imageSrc={require("../../images/devry-images/aws.webp")}
            title="NETW211 Final Project:"
            subtitle="Cloud Computing Fundamentals"
            description="This is the final project for my DeVry class NETW211. In this project I walk you through fundamental cloud computing concepts while using Amazon Web Services (AWS)."
            link="https://docs.google.com/presentation/d/1tDQQ0gfrQpxlnwI62_F_Y0xk-WlLqrpx/edit?usp=sharing&ouid=112160917683681091638&rtpof=true&sd=true"
          />
          <ProjectSection
            imageSrc={require("../../images/devry-images/IoT.webp")}
            title="CEIS101 Final Project:"
            subtitle="IoT: Internet of Things"
            description="This is the final project for my DeVry class CEIS101. In this project I walk you through fundamental IoT concepts while using Arduino components to make an automated home security system."
            link="https://docs.google.com/presentation/d/1tXsRcINDKMztrRautEQdOwSKAODtZoyv/edit?usp=sharing&ouid=112160917683681091638&rtpof=true&sd=true"
          />
          <ProjectSection
            imageSrc={require("../../images/devry-images/stock_tracker.webp")}
            title="CEIS150 Final Project:"
            subtitle="Object Oriented Programming"
            description="This is the final project for my DeVry class CEIS150. In this project I walk you through a stock tracking program I created using Python."
            link="https://docs.google.com/presentation/d/1taM1MTHQYk66JAMAFRPBVIlxSlBCkTlX/edit?usp=sharing&ouid=112160917683681091638&rtpof=true&sd=true"
          />
          <ProjectSection
            imageSrc={require("../../images/devry-images/CyberSecurity.webp")}
            title="SEC285 Final Project:"
            subtitle="Information Security"
            description="This is the final project for my DeVry class SEC285. In this project I walk you through information security fundamentals."
            link="https://docs.google.com/presentation/d/1th9NXCW1OBInQ96nvF-7X5Py67qfEdnr/edit?usp=sharing&ouid=112160917683681091638&rtpof=true&sd=true"
          />
        </Grid>
      </Box>
    );
  };

  export default DevryProjects;
