// *****************************************************************************
// This component displays the Footer section
// Goes to:
// ==> Contact.js Component
// *****************************************************************************
import { Box, BottomNavigation, Link, Grid, Paper, Typography, styled } from '@mui/material';
import ContactMe from "./ContactMe";

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

    <Box sx={{ flexGrow: 1 }} container spacing={2} direction="row" justifyContent="center" alignItems="center" className="footer" elevation={24}>
       <ContactMe/>
      <Grid item xs={12}>
        <Item sx={{ bgcolor: "primary.main", color: "white", borderRadius: "0px", }} >

          <Typography sx={{ fontSize: ".8rem", fontWeight: "bold" }}>
            Website created with
            <Link color="text.secondary" underline="none" target="_blank" rel="noopener" href="https://reactjs.org/" >
              &nbsp; React &nbsp;
            </Link>
            and &nbsp;
            <Link color="text.secondary" underline="none" target="_blank" rel="noopener" href="https://mui.com/material-ui/getting-started/overview/" >
              Material UI
            </Link>

          </Typography>
<Typography>Copyright &copy; {new Date().getFullYear()} Jeremy Duncan</Typography>
        </Item>

      </Grid>
    </Box>
    </BottomNavigation>
  );
};

export default ContactFooter;
