// *****************************************************************************
// This component displays the Footer section
// Goes to:
// ==> Home.js      // Homepage of portfolio site
// ==> Military.js  // Military training information
// ==> Devry.js     // Devry college projects / portfolio
// *****************************************************************************
import BottomNavigation from '@mui/material/BottomNavigation';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ContactMe from "./ContactMe";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <BottomNavigation>
    <Box
      sx={{
        flexGrow: 1,
        position: "sticky",
        bottom: 0,
        width: "100%",
      }}
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      
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
          <Typography sx={{ fontSize: ".8rem" }}>
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
          <Typography>Copyright &copy; {new Date().getFullYear()} Jeremy Duncan</Typography>

        </Item>
      </Grid>
    </Box>
    </BottomNavigation>
  );
};

export default Footer;
