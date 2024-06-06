// *****************************************************************************
// This component displays the Devry Header section
// Goes to:
// ==>  Devry.js Component
// *****************************************************************************
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const DevryHeader = () => {
  return (
    <AppBar elevation={9} position="sticky">
      <Grid sx={{ display: "flex", flexDirection: "column" }}>
        <Paper sx={{ borderRadius: "0px", bgcolor: "#ffffff" }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: { xs: "1rem", sm: "1.5rem", md: "7.5rem" },
              pr: { xs: "1rem", sm: "1.5rem", md: "7.5rem" },
              pt: { xs: ".5rem", sm: ".5rem", md: "1rem" },
              pb: { xs: ".5rem", sm: ".5rem", md: "1rem" },
            }}
          >
            <img
              src={require("../../images/devry-images/DeVry_University_Logo1.png")}
              distance={400}
              width="130px"
              alt="devry logo"
            />
            <Button
              className="back"
              sx={{ color: "#004787", fontWeight: "bold" }}
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

export default DevryHeader;
