// *****************************************************************************
// This component displays the programming languages and certifications
// Imported to AboutMe.js Component ==>
// *****************************************************************************

import React, { Component } from "react";
import Image from "mui-image";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
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
  constructor(props) {
    super(props);
    this.state = {
      buttonClick: "",
    };
  }
  
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
                src={require("../images/languages/html_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
                <Typography variant="caption">HTML</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/css-logo.webp")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            <Typography variant="caption">CSS</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/javascript_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">JavaScript</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/react.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">React</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/python_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">Python</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}          
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/java_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">Java</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/rails_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">Ruby on Rails</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/ruby_LOGO.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">Ruby</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/rspec_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">RSpec</Typography>
            </Item> 
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/jest_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">Jest</Typography>
            </Item> 
          </Grid>
          {/*//=========== GRID END ===============> */}
          {/*//=========== GRID BOX ===============> */}
          <Grid item xs={4} md={2}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/cSharp_logo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
              <Typography variant="caption">C#</Typography>
            </Item>
          </Grid>
          {/*//=========== GRID END ===============> */}
        </Grid>

{/* ========= This section renders all the Cerifications ====================*/}
        <Typography variant="h6" sx={{ paddingBottom: 2, paddingTop: 2 }}>
          <WorkspacePremiumIcon
            sx={{ verticalAlign: "center", fontSize: "small" }}
          />
          &nbsp; Certifications Earned
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid item xs={12} md={4}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/JavaScript_algo.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid item xs={12} md={4}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/Responsive_Web_Design.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
          {/*//=========== CERTIFICATION GRID BOX START ===================> */}
          <Grid item xs={12} md={4}>
            <Item sx={{ bgcolor: "primary.main", color: "white" }}>
              <Image
                src={require("../images/languages/Front_End_Dev.png")}
                style={{ borderRadius: 16 }}
                shift="top"
                distance={400}
              />
            </Item>
          </Grid>
          {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        </Grid>
      </Box>
    );
  }
}
export default Languages;