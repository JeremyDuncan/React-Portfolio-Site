// *****************************************************************************
// This component displays the Devry Footer section
// Imported to Military.js Component ==>
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class MilitaryFooter extends Component {
  render() {
    return (
      <Box
        sx={{ flexGrow: 1 }}
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Item
            sx={{
              bgcolor: "#ffffff",
              color: "#004787",
              borderRadius: "0px",
            }}
          >
            <Typography sx={{ fontSize: ".8rem", fontWeight: "bold" }}>
              I created this site with
              <Link
                color="text.secondary"
                underline="none"
                target="_blank"
                rel="noopener"
                href="https://reactjs.org/"
              >
                &nbsp; React &nbsp;
              </Link>
              and &nbsp;
              <Link
                color="text.secondary"
                underline="none"
                target="_blank"
                rel="noopener"
                href="https://mui.com/material-ui/getting-started/overview/"
              >
                Material UI
              </Link>
              .
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Copyright &copy; 2022 Jeremy Duncan
            </Typography>
          </Item>
        </Grid>
      </Box>
    );
  }
}
export default MilitaryFooter;
