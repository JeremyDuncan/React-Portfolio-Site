// *****************************************************************************
// This component displays the programming languages and certifications
// Goes to ==> MainSection.js Component
// *****************************************************************************
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Box, Button, Divider, Grid, Paper, Typography, styled } from "@mui/material";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Certifications = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      ></Grid>

      {/* ========= This section renders all the Cerifications ====================*/}
      <Divider>
        <Typography
          variant="h6"
          color="contrast.textDark"
          sx={{
            textShadow: "0px 3px 8px #8a8a8a",
            paddingBottom: 2,
            paddingTop: 2,
          }}
        >
          <WorkspacePremiumIcon
            sx={{
              verticalAlign: "center",
              fontSize: "large",
            }}
          />
          &nbsp; Certifications Earned
        </Typography>
      </Divider>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/JavaScript_algo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            JavaScript Algorithms
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://www.freecodecamp.org/certification/jeremyduncan/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/Responsive_Web_Design.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            Responsive Web Design
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://www.freecodecamp.org/certification/jeremyduncan/responsive-web-design"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/Front_End_Dev.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            Front End Development Libraries
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://www.freecodecamp.org/certification/JeremyDuncan/front-end-development-libraries"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/degrees/programming-essentials.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            Programming Essentials
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://www.parchment.com/u/award/9e66944ca488283bbf0b98b11a420511"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/certs/ux_cert1.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            Foundations of UX Design
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://coursera.org/verify/PKK2Y2LQ9NRD"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/certs/ux_process_edi_cert2.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            Start the UX Design Process
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://www.coursera.org/account/accomplishments/verify/T5BDCFFMHLWD"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/certs/UX_Cert3.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            Wireframes & Low-Fidelity Prototypes
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://www.coursera.org/account/accomplishments/verify/XQ72XXD23NKU"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
        {/*//=========== CERTIFICATION GRID BOX START ===================> */}
        <Grid direction="column" item xs={12} sm={6} md={5.5} lg={3.4} xl={3.4}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/certs/UX_Cert4.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            color="contrast.textDark"
            sx={{ textShadow: "0px 3px 8px #8a8a8a" }}
            variant="caption"
          >
            Conduct UX Research & Test Early Concepts
          </Typography>
          <br />
          <Button
            sx={{ mt: "5px", color: "button.textLight" }}
            href="https://www.coursera.org/account/accomplishments/verify/RK9Q2R26Z6UK"
            target="_blank"
            rel="noopener"
            variant="contained"
            endIcon={<WorkspacePremiumIcon />}
          >
            Verify
          </Button>
        </Grid>
        {/*//=========== CERTIFICATION GRID BOX END =====================> */}
      </Grid>
    </Box>
  );
};

export default Certifications;
