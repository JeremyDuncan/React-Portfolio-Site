// *****************************************************************************
// This component displays my Military Experience
// Imported to AboutMe.js Component ==>
// *****************************************************************************

import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import CircleIcon from "@mui/icons-material/Circle";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class MilitaryExp extends Component {
  render() {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto"
        }}
      >

        <List>
        <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Electronics Technician"
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Work Center Supervisor"
            />
          </ListItem>

          <ListItem>
          <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Radar Technician"
            />
          </ListItem>

          <ListItem>
          <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="2M Micro-Miniature Repair Technician"
            />
          </ListItem>

          <ListItem>
          <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Information Systems Technician"
            />
          </ListItem>

          <ListItem>
          <ListItemIcon>
              <CircleIcon />
            </ListItemIcon>
            <ListItemText
              primary="US Navy Instructor"
            />
          </ListItem>
        </List>

        <br />
          <Button
            href="https://jeremy-duncan.notion.site/Jeremy-Duncan-s-Military-Experience-7abdbb418a6b40e7b2abd161eed48cda"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<MilitaryTechRoundedIcon />}
          >
            See My Military Experience
          </Button>
      </Box>
    );
  }
}
export default MilitaryExp;
