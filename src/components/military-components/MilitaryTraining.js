// *****************************************************************************
// This component displays the Military training section
// Goes to:
// ==>  Military.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SchoolIcon from "@mui/icons-material/School";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MilitaryTraining = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            color="lightgray"
            sx={{
              fontWeight: "500",
              textAlign: "center",
              display: { xs: "none", sm: "none", md: "initial" },
            }}
          >
            Military Training
          </Typography>
          <Typography
            variant="h4"
            color="lightgrey"
            sx={{
              fontWeight: "500",
              textAlign: "center",
              display: { xs: "initial", sm: "initial", md: "none" },
            }}
          >
            Military Training
          </Typography>

          <Typography
            variant="h4"
            mb={1}
            sx={{
              color: "lightgrey",
              textAlign: "center",
              display: { xs: "none", sm: "none", md: "initial" },
            }}
          >
            My Training From The US Navy
          </Typography>
          <Typography
            variant="h7"
            mb={1}
            sx={{
              color: "lightgrey",
              textAlign: "center",
              display: { xs: "initial", sm: "initial", md: "none" },
            }}
          >
            My Training From The US Navy
          </Typography>

          <Grid
            xs={6}
            sx={{
              height: "1px",
              border: {
                xs: "4px solid gray",
                sm: "4px solid gray",
                md: "6px solid gray",
                lg: "6px solid gray",
                xl: "6px solid gray",
              },
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItem: "center",
              margin: "auto",
              width: { xs: "350px", md: "100%" },
              borderRadius: "20px",
              marginBottom: ".2rem",
            }}
          />
        </Grid>
        <Grid
          elevation={12}
          mb={5}
          xs={10}
          sx={{
            height: "1px",
            border: "2px solid clear",
            borderRadius: "20px",
          }}
        />
        {/*//========================= Pictures GRID BOX ================> */}
        <Grid
          sx={{
            gap: { xs: ".3rem", sm: ".3rem", md: "1rem", xl: "1rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          pb={5}
          pr={2}
          pl={2.5}
        >
          <Grid item xs={5} sm={5} md={2.5} lg={2.5} xl={2.5}>
            <Item
              sx={{
                bgcolor: "primary.secondary",
              }}
              elevation={12}
            >
              {/*==> Image Link <== ===*/}
              <Image
                src={require("../../images/military-images/me1.webp")}
                sx={{ borderRadius: "5px" }}
                shift="right"
                distance={400}
              />
            </Item>
          </Grid>
          <Grid item xs={5} sm={5} md={2.5} lg={2.5} xl={2.5}>
            <Item
              sx={{
                bgcolor: "primary.secondary",
              }}
              elevation={12}
            >
              {/*==> Image Link <== ===*/}
              <Image
                src={require("../../images/military-images/me2.webp")}
                sx={{ borderRadius: "5px" }}
                shift="bottom"
                distance={400}
              />
            </Item>
          </Grid>
          <Grid item xs={6.5} sm={6.5} md={3.3} lg={3.3} xl={3.3}>
            <Item
              sx={{
                bgcolor: "primary.secondary",
              }}
              elevation={12}
            >
              {/*==> Image Link <== ===*/}
              <Image
                src={require("../../images/military-images/honor_guard.webp")}
                sx={{ borderRadius: "5px" }}
                shift="top"
                distance={400}
              />
            </Item>
          </Grid>
          <Grid item xs={3.6} sm={3.6} md={1.84} lg={1.84} xl={1.84}>
            <Item
              sx={{
                bgcolor: "primary.secondary",
              }}
              elevation={12}
            >
              {/*==> Image Link <== ===*/}
              <Image
                src={require("../../images/military-images/me_hillary_clinton.webp")}
                sx={{ borderRadius: "5px" }}
                shift="left"
                distance={400}
              />
            </Item>
          </Grid>
        </Grid>
        {/*//================= PICTURE GRID END =========================> */}
        <Grid
          elevation={24}
          mb={5}
          ml={1.2}
          xs={10}
          xl={11}
          sx={{
            height: "1px",
            border: "5px solid gray",
            borderRadius: "5px",
            width: "70%",
          }}
        />
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={10.5}
            sm={10.5}
            md={10.5}
            lg={10.5}
            xl={10.5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            {/*//============= Security SCHOOL GRID BOX ===================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Security Reaction Force Advanced
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Academi-Southwest — 2016 | San Diego, CA
            </Typography>

            {/*//========================= GRID END =========================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//========= Security basic SCHOOL GRID BOX =================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Armed Sentry/Security Reaction
              Force- Basic 
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Academi- Southwest — 2016 | San Diego, CA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//=============SGSI SCHOOL GRID BOX ========================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Stabilized Glide Slope Indicator
              and Wave Off Light System Maintenance
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Naval Aviation Technical Training Unit, North Island —
              2016 | San Diego, CA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= IVCS SCHOOL GRID BOX =====================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> MarCom Integrated Voice
              Communication System (IVCS)
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Surface Combat Systems — 2015 | San Diego, CA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= Data Link SCHOOL GRID BOX ==================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Data Link Communication System
              Maintenance Technician (DLCSMT)
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Surface Combat Systems, Dam Neck — 2015 | Virginia
              Beach, VA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= WSN-7 SCHOOL GRID BOX ======================> */}
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> AN/WSN-7(V) INS and AN/WSN-7B(V)
              RLG Operation and Maintenance
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Surface Combat Systems, Dam Neck — 2014 | Virginia
              Beach, VA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= ISM SCHOOL GRID BOX ========================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Information Systems Maintenance
              Technician School
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Information Dominance, Dam Neck — 2012 | Virginia
              Beach, VA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= Instructor SCHOOL GRID BOX =================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Instructional Delivery Continuum
              (IDC) - Journeyman Instructor Training (JIT) - Basic Instructor
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Navy Leadership Training — 2011 | Norfolk, VA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= micro 2m SCHOOL GRID BOX =================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Microminiature Electronics Repair
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Fleet Training Center — 2010 | Norfolk, VA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= sps-73 SCHOOL GRID BOX =====================> */}
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> AN/SPS-73 Surface Search Radar Set
              Combined Maintenance School
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Surface Combat Systems — 2010 | Norfolk, VA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= mini 2m SCHOOL GRID BOX =====================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Miniature Electronics Repair
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Surface Combat Systems — 2007 | Norfolk, VA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= AN/SYQ-7 SCHOOL GRID BOX ===================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> AN/SYQ-7 (V) 2 Naval Modular
              Automated Communications Systems Maintenance School
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Fleet Training Center — 2006 | San Diego, CA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= (UHF)  SCHOOL GRID BOX =====================> */}
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Ultra High Frequency Systems (UHF)
              Technician School
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Service Support Learning — 2006 | San Diego, CA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= (HF)  SCHOOL GRID BOX =====================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> High Frequency Systems (HF)
              Maintenance Technician School
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Service Support Learning — 2006 | San Diego, CA
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//============= ET A  SCHOOL GRID BOX =====================> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Electronics Technician (ET) A
              School
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Surface Combat Systems — 2005-2006 | Great Lakes, IL
            </Typography>

            {/*//========================= GRID END =======================> */}

            <Grid
              elevation={24}
              mb={5}
              ml={1.2}
              xs={10}
              xl={11}
              sx={{
                height: ".5px",
                border: ".5px solid gray",
                borderRadius: "5px",
                width: "100%",
              }}
            />

            {/*//======== apprentice training SCHOOL GRID BOX =============> */}

            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                textAlign: "left",
              }}
            >
              <SchoolIcon fontSize="small" /> Electronics Technician Apprentice
              Technical Training
            </Typography>
            <Typography
              sx={{
                color: "lightgray",
                textShadow: ".5px .5px 2px black",
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                textAlign: "left",
              }}
              pb={4}
              pl={4}
            >
              Center for Surface Combat Systems — 2005 | Great Lakes, IL
            </Typography>
          </Grid>
          {/*//========================= GRID END =======================> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MilitaryTraining;
