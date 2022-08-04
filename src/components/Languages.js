// *****************************************************************************
// This component displays the programming languages and certifications
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import React, { Component } from "react";

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
          sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* ========= This section renders all the programming language logos =======*/}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item elevation={6} sx={{ bgcolor: "primary.main" }}>
              <Image
                src={require("../images/languages/html_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              HTML
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/css-logo_Scaled.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              CSS
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/javascript_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              JavaScript
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/react_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              React.js
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/Node.js_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Node.js
            </Typography>
          </Grid>

          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/python_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Python
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/java_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Java
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/rails_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Rails
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/Postgresql_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Postgresql
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/ruby_LOGO_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Ruby
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/pry_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Pry
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/rspec_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              RSpec
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/jest_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              Jest
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/cSharp_logo_Scaled.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              variant="caption"
              color="contrast.textDark"
            >
              C#
            </Typography>
          </Grid>
          {/*//=========== GRID END ===============> */}
        </Grid>

        {/* ========= This section renders all the Cerifications ====================*/}
        <Divider>
          <Typography
            variant="h6"
            color="contrast.textDark"
            sx={{
              textShadow: "0px 3px 8px #8a8a8a",
              paddingBottom: 2,
              paddingTop: 2,
            }}
          >
            <WorkspacePremiumIcon
              sx={{
                verticalAlign: "center",
                fontSize: "large",
              }}
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
          <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/JavaScript_algo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              color="contrast.textDark"
              sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
              variant="caption"
            >
              JavaScript Algorithms
            </Typography>
            <br />
            <Button
              sx={{ mt: "5px", color: "button.textLight" }}
              href="https://www.freecodecamp.org/certification/jeremyduncan/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noopener"
              variant="contained"
              endIcon={<WorkspacePremiumIcon />}
            >
              Verify
            </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/Responsive_Web_Design.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              color="contrast.textDark"
              sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
              variant="caption"
            >
              Responsive Web Design
            </Typography>
            <br />
            <Button
              sx={{ mt: "5px", color: "button.textLight" }}
              href="https://www.freecodecamp.org/certification/jeremyduncan/responsive-web-design"
              target="_blank"
              rel="noopener"
              variant="contained"
              endIcon={<WorkspacePremiumIcon />}
            >
              Verify
            </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/languages/Front_End_Dev.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              color="contrast.textDark"
              sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
              variant="caption"
            >
              Front End Development Libraries
            </Typography>
            <br />
            <Button
              sx={{ mt: "5px", color: "button.textLight" }}
              href="https://www.freecodecamp.org/certification/JeremyDuncan/front-end-development-libraries"
              target="_blank"
              rel="noopener"
              variant="contained"
              endIcon={<WorkspacePremiumIcon />}
            >
              Verify
            </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/degrees/programming-essentials.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              color="contrast.textDark"
              sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
              variant="caption"
            >
              Programming Essentials
            </Typography>
            <br />
            <Button
              sx={{ mt: "5px", color: "button.textLight" }}
              href="https://www.parchment.com/u/award/877ddb7d34111e1741c380984dfeb7a4"
              target="_blank"
              rel="noopener"
              variant="contained"
              endIcon={<WorkspacePremiumIcon />}
            >
              Verify
            </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/certs/ux_cert1.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              color="contrast.textDark"
              sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
              variant="caption"
            >
              Foundations of UX Design
            </Typography>
            <br />
            <Button
              sx={{ mt: "5px", color: "button.textLight" }}
              href="https://coursera.org/verify/PKK2Y2LQ9NRD"
              target="_blank"
              rel="noopener"
              variant="contained"
              endIcon={<WorkspacePremiumIcon />}
            >
              Verify
            </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.8} xl={4}>
            <Item
              elevation={6}
              sx={{ bgcolor: "primary.main", color: "white" }}
            >
              <Image
                src={require("../images/certs/ux_process_edi_cert2.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
            <Typography
              fontWeight="bold"
              color="contrast.textDark"
              sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
              variant="caption"
            >
              Start the UX Design Process
            </Typography>
            <br />
            <Button
              sx={{ mt: "5px", color: "button.textLight" }}
              href="https://www.coursera.org/account/accomplishments/verify/T5BDCFFMHLWD"
              target="_blank"
              rel="noopener"
              variant="contained"
              endIcon={<WorkspacePremiumIcon />}
            >
              Verify
            </Button>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        </Grid>
        <br />
        <Button
          sx={{ color: "button.textLight" }}
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
