// *****************************************************************************
// This component displays college degrees
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
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
      {/* ========= This section renders all the Cerifications ====================*/}

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid item xs={12} sm={6} md={6}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/degrees/associate-degree.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          sx={{ mt: "5px", color: "button.textLight" }}
          href="https://www.parchment.com/u/award/877ddb7d34111e1741c380984dfeb7a4"
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
