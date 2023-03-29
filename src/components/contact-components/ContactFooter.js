// *****************************************************************************
// This component displays the Footer section
// Goes to:
// ==> Contact.js Component 
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ContactMe from "../ContactMe";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactFooter = () => {
  return (
    <BottomNavigation sx={{marginTop: "180px"}}>
     
    <Box
      sx={{ flexGrow: 1 }}
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="footer"
      elevation={24}
    
    >
       <ContactMe/>
      <Grid item xs={12}>
        <Item
          sx={{
            bgcolor: "primary.main",
            color: "white",
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
            Copyright &copy; 2023 Jeremy Duncan
          </Typography>
        </Item>
      </Grid>
    </Box>
    </BottomNavigation>
  );
};

export default ContactFooter;
