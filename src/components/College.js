// *****************************************************************************
// This component displays my Colleges and Degrees
// Imported to AboutMe.js Component ==>
// *****************************************************************************

import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class College extends Component {
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
              <SchoolRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Associate of Applied Science - Information Technology and
              Networking"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– DeVry University 2021 - June-2022"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– Grade: 4.0 GPA, Deans List Awardee"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– Nominated for the National Society of Leadership and Success"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– Nominated for the Alpha Chi Honor Society"
            />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemIcon>
              <SchoolRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Bachelor of Science - Computer Information Systems and
          Software Programming Candidate"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– DeVry University 2021 - Nov-2023 (Projected)"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– Grade: 4.0 GPA, Deans List Awardee"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– Nominated for the National Society of Leadership and Success"
            />
          </ListItem>

          <ListItem>
            <ListItemText
              inset
              secondary="– Nominated for the Alpha Chi Honor Society"
            />
          </ListItem>
        </List>

        <br />
        <Button
          href="https://www.jeremy-duncan.com/devry-projects/devry.html"
          target="_blank"
          rel="noopener"
          variant="contained"
          endIcon={<SchoolRoundedIcon />}
        >
          Visit My College Project Page
        </Button>
      </Box>
    );
  }
}
export default College;
