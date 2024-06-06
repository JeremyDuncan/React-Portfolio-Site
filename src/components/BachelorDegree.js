// *****************************************************************************
// This component displays college degrees
// Goes to ==> MainSection.js Component
// *****************************************************************************
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Box, Button, Grid, Paper, styled } from "@mui/material";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Degrees = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* ========= This section renders all the Certifications =============*/}

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== CERTIFICATION GRID BOX START =====================> */}
        <Grid item xs={12} sm={6} md={6}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/degrees/bachelor-degree.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =======================> */}
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          sx={{ mt: "5px", color: "button.textLight" }}
          href="https://www.parchment.com/u/award/1849b0b0895e9e86b45d54af3e2d1823"
          target="_blank"
          rel="noopener"
          variant="contained"
          endIcon={<WorkspacePremiumIcon />}
        >
          Verify
        </Button>
      </Grid>
    </Box>
  );
};

export default Degrees;
