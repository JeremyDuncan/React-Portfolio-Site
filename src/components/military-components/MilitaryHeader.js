// *****************************************************************************
// This component displays the Military header section
// Goes to:
// ==>  Military.js Component
// *****************************************************************************
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Grid, Paper,  AppBar } from "@mui/material";

const MilitaryHeader = () => {
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
            <img
              id="devryLogo"
              src={require("../../images/military-images/us_navt_et_logo.png")}
              alt="devry logo"
            />
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

export default MilitaryHeader;
