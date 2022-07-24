// *****************************************************************************
// This component displays the programming languages and certifications
// Goes to ==> MainSection.js Component
// *****************************************************************************

import React, { Component } from "react";
import Image from "mui-image";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class Languages extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
{/* ========= This section renders all the programming language logos =======*/}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/html_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />  
            </Item>
            <Typography variant="caption">HTML</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/css-logo_Scaled.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">CSS</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/javascript_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">JavaScript</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white"}}>
              <Image
                src={require("../images/languages/react_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">React</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/python_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">Python</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}          
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/java_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">Java</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/rails_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">Rails</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/ruby_LOGO_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">Ruby</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/rspec_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item> 
            <Typography variant="caption">RSpec</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/jest_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item> 
            <Typography variant="caption">Jest</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/cSharp_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">C#</Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
        </Grid>
        
{/* ========= This section renders all the Cerifications ====================*/}
        <Divider>
        <Typography variant="h6" sx={{ paddingBottom: 2, paddingTop: 2 }}>
          <WorkspacePremiumIcon
            sx={{ verticalAlign: "center", fontSize: "small" }}
          />
          &nbsp; Certifications Earned
        </Typography>
        </Divider>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid 
          direction="column"
          item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              
              <Image
                src={require("../images/languages/JavaScript_algo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">JavaScript Algorithms</Typography>
            <br/>
            <Button
            sx={{mt: "5px"}}
            href="https://www.freecodecamp.org/certification/jeremyduncan/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon  />}
          >
            Verify
          </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid 
          direction="column"
          item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/Responsive_Web_Design.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">Responsive Web Design</Typography>
            <br />
            <Button
            sx={{mt: "5px"}}
            href="https://www.freecodecamp.org/certification/jeremyduncan/responsive-web-design"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon  />}
          >
            Verify
          </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid 
          direction="column"
          item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/Front_End_Dev.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">Front End Development Libraries</Typography>
            <br/>
            <Button
            sx={{mt: "5px"}}
            href="https://www.freecodecamp.org/certification/JeremyDuncan/front-end-development-libraries"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon  />}
          >
            Verify
          </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid 
          direction="column"
          item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/degrees/programming-essentials.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography variant="caption">Programming Essentials</Typography>
            <br />
            <Button
            sx={{mt: "5px"}}
            href="https://www.parchment.com/u/award/877ddb7d34111e1741c380984dfeb7a4"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon  />}
          >
            Verify
          </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        </Grid>
        <br />
          <Button
            href="https://github.com/JeremyDuncan"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<GitHubIcon />}
          >
            Visit my GitHub
          </Button>
      </Box>
    );
  }
}
export default Languages;