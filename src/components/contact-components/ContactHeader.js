// *****************************************************************************
// This is the Header Component
// Goes to => Contact.js
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ContactHeader = () => {
  return (
    <AppBar elevation={9} position="sticky" sx={{ width: "100%" }}>
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Paper sx={{ borderRadius: "0px", bgcolor: "#ffffff" }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: { xs: "1rem", sm: "1.5rem", md: "7.5rem" },
              pr: { xs: "1rem", sm: "1.5rem", md: "7.5rem" },
              alignItems: "center",
            }}
          >
            <Typography>Jeremy Duncan</Typography>
            <Button
              className="back"
              sx={{
                display: "flex",
                color: "#004787",
                fontWeight: "bold",
                height: "70px",
              }}
              href="/"
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              size="large"
            >
              Back
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </AppBar>
  );
};
export default ContactHeader;
