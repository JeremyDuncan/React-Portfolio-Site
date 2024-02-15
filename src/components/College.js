// *****************************************************************************
// This component displays my Colleges and Degrees
// Goes to to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BachelorDegree from "./BachelorDegree.js";
import Degrees from "./Degrees.js";

const College = () => {
  return (
    <Box container direction="row" justifyContent="center" alignItems="center">
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 750,
            bgcolor: "primary.secondary",
            color: "contrast.textDark",
          }}
        >

<ListItem sx={{ textShadow: "0px 3px 8px #8a8a8a" }}>
            <ListItemIcon>
              <SchoolRoundedIcon sx={{ color: "contrast.textDark" }} />
            </ListItemIcon>
            <ListItemText
              primary="Bachelor of Science - Computer Information Systems, Major:
          Software Programming"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– DeVry University 2021 - October-2023"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– Grade: 4.0 GPA, With Honors: Summa Cum Laude"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– Nominated for the National Society of Leadership and Success"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– Nominated for the Alpha Chi Honor Society"
            />
          </ListItem>

          <ListItem>
            {/* INSERT DEGREE HERE */}
            <BachelorDegree />
          </ListItem>




          <Divider />

          <ListItem sx={{ textShadow: "0px 3px 8px #8a8a8a" }}>
            <ListItemIcon color="white">
              <SchoolRoundedIcon sx={{ color: "contrast.textDark" }} />
            </ListItemIcon>
            <ListItemText
              primary="Associate of Applied Science - Information Technology and
              Networking"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– DeVry University 2021 - June-2022"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– Grade: 4.0 GPA, With Honors, Deans List Awardee"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– Nominated for the National Society of Leadership and Success"
            />
          </ListItem>

          <ListItem
            sx={{
              color: "secondaryList.text",
              textShadow: "0px 3px 8px #8a8a8a",
            }}
          >
            <ListItemText
              inset
              disableTypography
              secondary="– Nominated for the Alpha Chi Honor Society"
            />
          </ListItem>

          <ListItem>
            {/* INSERT DEGREE HERE */}
            <Degrees />
          </ListItem>
          <br />

        </List>
        <br />

        <Button
          sx={{ color: "button.textLight" }}
          href="/DeVry-University-Projects"
          variant="contained"
          endIcon={<SchoolRoundedIcon />}
        >
          See My College Projects
        </Button>
      </Grid>
    </Box>
  );
};
export default College;
